import {isNode} from 'browser-or-node'
import {defaultWidth, styles} from './config'
import {out} from './index'

/** @internal */
export const lineWidth = (min?: number, max?: number): number => {
	max = max ? Math.min(max, terminalWidth()) : terminalWidth()
	min = min ?? 0
	return Math.max(Math.min(min, defaultWidth), max)
}

/**
 * Determine the width of the terminal
 * @internal
 * @returns {number|number}
 */
export const terminalWidth = () => (isNode && process.stdout.isTTY ? process.stdout.columns : defaultWidth) || defaultWidth

/**
 * Noop function
 * @internal
 */
/* eslint @typescript-eslint/no-empty-function: off */
export const noop = () => {
}

/** @internal */
export function example() {
	out.block.write('Note: Verbosity detection is disabled for this example.')

	out('Out can be called as a function directly to use like console.log.')
	out('out()')

	out.ln('out.write() is also available, and useful for terminating chains.')
	out.write('out.write()')
	out.write('out.write()', 'with', 'multiple', 'arguments')
	out.write('out.write()', 'with different', {message: 'Variable', value: 'types'})

	out.ln('Here are all of the styles you can use:')
	for (const [name, style] of Object.entries(styles)) {
		const styleVerbosity = style.verbosity > 0 ? style.verbosity : style.verbosity < 0 ? 'forced' : 0
		out.force.noExit[name](`out.${name}(verbosity: ${styleVerbosity})`)
	}

	out.ln('Log level styles will override each other:')
	out.force.warn.success('out.warn.success()')
	out.force.success.warn('out.success.warn()')

	out.ln('There are also a set of modifiers to adjust the behavior or style:')
	out.title.info('out.title.info()')
	out.ln('>>> out.heading("heading").write("message")')
	out.heading('heading').write('message')
	out.block.write('out.block.write()')
	out.broken.write('out.broken.write()', 'with', 'multiple', 'arguments')
	out.ln('out.ln("Prints a line before the message")')

	out.ln('Go crazy with chaining....')
	out.ln('>>> out.info("info").write("message").ln("Prints a line before the message").block.success("We did it!")')
	out.info('info').write('message').ln('New Line').block.success('Success!')

	out.ln('Special methods:')
	out.prefix('out').write('out.prefix("out").write()')
	out.write('Prefixes will stick until the next prefix is set. Clear with something falsy like ""/false/null or just out.prefix()')
	out.prefix().write('out.prefix().write("No more prefix")')

	const prefix1 = out.clone().prefix('prefix1')
	const prefix2 = out.clone().prefix('prefix2')
	const prefix3 = out.clone().prefix('prefix3')
	prefix1.ln.write('Prefix colors will rotate for increased readability.')
	prefix2.write('Every time you call prefix()')
	prefix3.write('The color will change.')
	prefix1.write('Mixing out.clone().prefix() is useful for async logging.')
	prefix1.write('prefix1.write()')
	prefix2.write('prefix2.write()')
	prefix3.write('prefix3.write()')
	prefix1.write('prefix1.write()')
	prefix2.write('prefix2.write()')
	prefix3.write('prefix3.write()')

	out.ln('You can also use new Out("prefix") to create a new instance with a prefix. This is also useful as it registers itself as a global logger.')
	out('This will allow someone to use the --vo=yourprefix:level syntax to set the verbosity of yourprefix in Node. Check the docs for more details.')

	out.ln.info('By default colors are only used as accents of the messages.')
	out.config('textColor', true)
	out.info('However, can enable full text color with out.config("textColor", true) or when create a new instance of out new Out({textColor: true})')
	out.config('textColor', false)

	out.ln('')
}
