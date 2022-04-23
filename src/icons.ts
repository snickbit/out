import {isBrowser, isNode} from 'browser-or-node'

const icons: { [key: string]: any } = {
	log: {
		unicode: '>\ufe0f',
		text: 'log'
	},
	info: {
		unicode: 'i\ufe0f',
		text: 'info'
	},
	success: {
		unicode: '✓\ufe0f',
		text: 'success'
	},
	done: {
		unicode: '🏁',
		text: 'done'
	},
	warn: {
		unicode: '\u26A0\ufe0f',
		text: 'warn'
	},
	fatal: {
		unicode: '💀',
		text: 'fatal'
	},
	error: {
		unicode: '❌',
		text: 'error'
	},
	exception: {
		unicode: '🚫',
		text: 'exception'
	},
	debug: {
		unicode: '🐝',
		text: 'debug'
	},
	trace: {
		unicode: '🔍',
		text: 'trace'
	},
	verbose: {
		unicode: '📣',
		text: 'verbose'
	},
	silly: {
		unicode: '📢',
		text: 'silly'
	},
	notice: {
		unicode: '‼\ufe0f',
		text: 'notice'
	}
}

export type IconDefinition = {
	symbol: string
	type: string
}

/**
 * Get the icon for a log level
 */
export function getIcon(symbol: string, type = 'unicode'): IconDefinition {
	if (type === 'unicode' && !isUnicodeSupported()) {
		type = 'text'
	}

	const result = icons[symbol] ? icons[symbol][type] : symbol

	return {
		symbol: result,
		type
	}
}

export type LabelDefinition = IconDefinition & {
	text: string
}

/**
 * Get icon set for a log level
 */
export function getLabel(symbol: string): LabelDefinition {
	return {
		...getIcon(symbol),
		text: symbol
	}
}

let is_unicode_supported: boolean | undefined

/**
 * Check if unicode is supported
 */
export function isUnicodeSupported(): boolean {
	if (is_unicode_supported === undefined) {
		if (isBrowser) {
			is_unicode_supported = true
		} else if (isNode) {
			const tests = {
				is_not_windows_and_not_term_linux: process.platform !== 'win32' && process.env.TERM !== 'linux',
				is_ci: Boolean(process.env.CI),
				is_wt: Boolean(process.env.WT_SESSION),
				is_conemu: process.env.ConEmuTask === '{cmd::Cmder}',
				is_vscode: process.env.TERM_PROGRAM === 'vscode',
				is_terminal_emulator: Boolean(process.env.TERMINAL_EMULATOR),
				is_xterm: process.env.TERM === 'xterm-256color',
				is_alacritty: process.env.TERM === 'alacritty'
			}

			is_unicode_supported = Object.values(tests).some(Boolean)
		}
	}

	return is_unicode_supported
}
