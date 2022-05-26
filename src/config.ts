import {Cycle} from '@snickbit/cycle'
import {isBrowser} from 'browser-or-node'
import {Out} from './Out'

export type CaseType = 'camel' | 'constant' | 'kebab' | 'lower' | 'none' | 'pascal' | 'sentence' | 'slug' | 'snake' | 'symbol' | 'title' | 'upper'

export type OutState = {
	force: boolean
	dominant: boolean
	color: string
	label: string
	title: boolean
	heading: string
	block: boolean
	exit: boolean | number
	broken: boolean
	throw: boolean
	center: boolean
	verbosity: number
	extras: any[]
	extras_verbosity: number
	formatter: (messages: string) => string
	before: () => void
	after: () => void
	case: CaseType
	[key: string]: any
}

export type OutPersistent = {
	name: string
	prefix: OutPersistentPrefix
	verbosity: number
}

export type OutPersistentPrefix = {
	color: string
	text: string
}

export const defaultState: Partial<OutState> = {
	color: null,
	dominant: false,
	force: false,
	label: '',
	title: false,
	block: false,
	verbosity: 0, // output verbosity
	extras_verbosity: 1,
	formatter: null,
	before: null,
	after: null
}

export const defaultWidth = isBrowser ? 100 : 20

export const _console = console

export const default_inspection_options = {
	maxStringLength: 300,
	colors: true,
	showHidden: true,
	depth: 3
}

export const colorCycle = new Cycle('hex')

export type OutStyle = {
	[key: string]: boolean | number | string
	color?: string
	force?: boolean
	dominant?: boolean
	label?: string
	exit?: boolean | number
	broken?: boolean
	verbosity?: number
	title?: boolean
	block?: boolean
	throw?: boolean
	center?: boolean
	breadcrumbs?: string
}

export interface OutStyles {
	log: (...messages: any) => void
	info: (...messages: any) => void
	silly: (...messages: any) => void
	trace: (...messages: any) => void
	warn: (...messages: any) => void
	debug: (...messages: any) => void
	verbose: (...messages: any) => void
	notice: (...messages: any) => void
	exception: (...messages: any) => void
	error: (...messages: any) => void
	throw: (...messages: any) => void
	fatal: (...messages: any) => void
	success: (...messages: any) => void
	done: (...messages: any) => void
}

export const styles: Record<string, OutStyle> = {
	log: {
		color: '#FFF',
		label: 'log'
	},
	info: {
		color: '#1FCCC6',
		dominant: true,
		label: 'info'
	},
	silly: {
		color: '#6F7783',
		verbosity: 6,
		label: 'silly'
	},
	trace: {
		color: '#6F7783',
		verbosity: 5,
		label: 'trace'
	},

	warn: {
		color: '#CCC91F',
		dominant: true,
		verbosity: 1,
		label: 'warn'
	},
	debug: {
		color: '#CC991F',
		verbosity: 2,
		label: 'debug'
	},
	verbose: {
		color: '#C78822',
		verbosity: 3,
		label: 'verbose'
	},
	notice: {
		color: '#C37725',
		dominant: true,
		verbosity: 4,
		label: 'notice'
	},
	exception: {
		color: '#BF6629',
		dominant: true,
		verbosity: -1,
		label: 'exception'
	},
	error: {
		color: '#BA552C',
		dominant: true,
		verbosity: -1,
		label: 'error'
	},
	throw: {
		color: '#B6442F',
		dominant: true,
		throw: true,
		verbosity: -1,
		label: 'error'
	},
	fatal: {
		color: '#B23333',
		dominant: true,
		exit: 1,
		verbosity: -1,
		label: 'fatal'
	},
	success: {
		color: '#5FCC1F',
		dominant: true,
		label: 'success'
	},
	done: {
		color: '#5FCC1F',
		dominant: true,
		label: 'done',
		exit: 0
	}
}

export type OutModifierMethod = (out: Out) => Out

export type OutModifier = OutModifierMethod | any

export const modifiers: Record<string, OutModifier> = {
	exit: true,
	noExit(out: Out) {
		out.state.exit = undefined
		out.lock('exit')
		return out
	},
	broken: true,
	center: true,
	title: true,
	block(out: Out) {
		out.state.block = true
		out.state.center = true
		return out
	},
	force: true,
	ln(out: Out) {
		_console.log()
		return out
	}
}

export type OutSettings = {
	[key: string]: boolean | number | string
	textColor: boolean
	verbosity: number
}

export const settings: OutSettings = {
	textColor: false,
	verbosity: 0
}
