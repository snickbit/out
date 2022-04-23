import {OutSettings} from './config'
import {isBrowser} from 'browser-or-node'
import {Out} from './Out'

export {Out} from './Out'

export function outFactory(options?: Partial<OutSettings>): Out
export function outFactory(name?: string, options?: Partial<OutSettings>): Out
export function outFactory(name?: string | Partial<OutSettings>, options?: Partial<OutSettings>) {
	return new Out(name, options) as Out
}

/**
 * Cross-platform pretty output for your terminal or browser console.
 */
export const out = outFactory()

/**
 * Cross-platform pretty output for your terminal or browser console.
 */
export default out as Out

if (isBrowser) {
	// @ts-ignore
	window.out = out as Out
}
