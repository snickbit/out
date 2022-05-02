import {parse} from '@snickbit/utilities'
import {isBrowser, isNode} from 'browser-or-node'
import picomatch from 'picomatch-browser'

const verbosity = {
	global: null,
	apps: {},
	arg: null,
	checked: false
}

/**
 * Check if the verbosity is at least the given level
 * @param {number} [level=1] - The level to check against
 * @returns {boolean}
 */
export const isVerbose = (level = 1): boolean => getVerbosity() >= level

export function getArgVerbosity() {
	let arg_verbosity
	if (isNode) {
		if (process.argv.length > 0) {
			const verbose_args = process.argv.filter(arg => arg.startsWith('--verbose=') || arg.startsWith('-v') || arg.startsWith('--vo='))
			if (verbose_args.length > 0) {
				arg_verbosity = verbose_args.reduce((acc, arg) => {
					if (arg.startsWith('--verbose=')) {
						const [, value] = arg.split('=')
						return parseInt(value)
					} else if (arg.startsWith('--vo=')) {
						const [, def] = arg.split('=')
						const [app, value] = def.split(':')
						verbosity.apps[app] = parseInt(value)
						return acc
					} else if (arg.startsWith('-v')) {
						return acc + (arg.match(/v/g) || []).length
					}
					return acc + 1
				}, 0)
			}
		}
	}
	return arg_verbosity
}

export function processVerbosity() {
	let process_verbosity, app_values
	if (isNode) {
		process_verbosity = process.env.VERBOSITY || process.env.VERBOSE
		verbosity.arg = getArgVerbosity()
		app_values = process.env.OUT
	} else if (isBrowser) {
		process_verbosity = window.localStorage.getItem('verbosity') || window.localStorage.getItem('verbose')
		app_values = window.localStorage.getItem('out') || window.localStorage.getItem('OUT')
	}

	if (app_values) {
		const apps = app_values.split(',')
		for (const app of apps) {
			const [name, level] = app.split(':')
			verbosity.apps[name] = Math.max(verbosity.apps[name] ?? 0, parse(level))
		}
	}
	if (process_verbosity) {
		verbosity.global = parse(process_verbosity) || 0
	}

	verbosity.checked = true
}

function stringifyAppValues() {
	return Object.keys(verbosity.apps)
	.map(app => `${app}:${verbosity.apps[app]}`)
	.join(',')
}

export function setProcessVerbosity(value, app = null) {
	if (isNode) {
		if (app) {
			verbosity.apps[app] = value
			process.env.OUT = stringifyAppValues()
		} else {
			verbosity.global = value
			process.env.VERBOSE = value
		}
	} else if (isBrowser) {
		if (app) {
			verbosity.apps[app] = value
			window.localStorage.setItem('out', stringifyAppValues())
		} else {
			verbosity.global = value
			window.localStorage.setItem('verbosity', value)
		}
	}
}

/**
 * Get and parse the verbosity from the CLI
 * @param {string} [app] - The name of the app to get the verbosity for
 * @returns {null|number}
 */
export function getVerbosity(app: string = null) {
	if (!verbosity.checked) {
		processVerbosity()
	}

	if (!app || verbosity.apps['*']) {
		return verbosity.global || 0
	} else {
		const matches = []
		for (const v_app in verbosity.apps) {
			if (picomatch(v_app)(app)) {
				matches.push(verbosity.apps[v_app])
			}
		}
		return matches.length ? Math.max(...matches) : undefined
	}
}

/**
 * Temporarily set the verbosity
 * @param {number} [level=0]
 * @param {string} [app]
 */
export function setVerbosity(level = 0, app = null) {
	if (app) {
		verbosity.apps[app] = level
	} else {
		verbosity.global = level
	}
}
