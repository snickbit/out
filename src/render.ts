import {isBrowser} from 'browser-or-node'
import chalk from 'chalk'
import {inspect} from 'node-inspect-extracted'
import stripAnsi from 'strip-ansi'
import {default_inspection_options} from './config'
import {lineWidth, terminalWidth} from './helpers'

if (isBrowser) {
	chalk.level = 1
}

/**
 * @param {string} text - The text to format
 * @param {string} [case_type] - The case type to format to
 * @returns {string}
 */
export function formatCase(text, case_type) {
	switch (case_type) {
		case 'upper':
			return text.toUpperCase()
		case 'lower':
			return text.toLowerCase()
		case 'camel':
			return text.replace(/\s(.)/g, $1 => $1.toUpperCase()).replace(/\s/g, '')
		case 'snake':
			return text.replace(/\s/g, '_').toLowerCase()
		case 'kebab':
			return text.replace(/\s/g, '-').toLowerCase()
		case 'title':
			return text.replace(/\s(.)/g, $1 => $1.toUpperCase())
		case 'sentence':
			return text.charAt(0).toUpperCase() + text.slice(1)
		case 'pascal':
			return text
			.replace(/\s(.)/g, $1 => $1.toUpperCase()).replace(/\s/g, '')
		case 'constant':
			return text
			.replace(/\s(.)/g, $1 => $1.toUpperCase())
			.replace(/\s/g, '_')
			.toUpperCase()
		case 'slug':
			return text.replace(/\s/g, '-').toLowerCase()
		case 'symbol':
			return text.replace(/\s/g, '_').toUpperCase()
		default:
			return text
	}
}

/**
 * Inspect a variable
 * @param {any} value
 * @param {object} [options]
 */
export function _inspect(value, options = {}) {
	return isBrowser ? value : inspect(value, {...default_inspection_options, ...(options || {})})
}

/**
 * Generate a horizontal line
 */
export const horizontalLine = (symbol: string, min?: number, max?: number): string => symbol.repeat(lineWidth(min, max))

/**
 * Center the given text in the terminal between the given symbol
 * @param {string} text
 * @param {string} [symbol=' ']
 * @param {number} [padding=2]
 * @returns {string}
 */
export function centerText(text: string, symbol: string = ' ', padding: number = 2) {
	const parts = text.split('\n')
	const text_length = Math.max(
		parts.reduce((a, b) => Math.max(a, stripAnsi(b).length), 0),
		1
	)
	const pad_len = Math.max(Math.floor((terminalWidth() - text_length) / 2) - 2, 0)
	const str_pad = (symbol || ' ').repeat(pad_len) + ' '.repeat(padding)
	return parts.map(part => str_pad + part + str_pad.split('').reverse().join('')).join('\n')
}
