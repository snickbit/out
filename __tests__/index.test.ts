import {Out} from '../src'

describe('Out', () => {
	it('new Out() should be an instance of Out', () => expect(new Out()).toBeInstanceOf(Out))

	it('new Out("name") an instance of Out', () => expect(new Out('name')).toBeInstanceOf(Out))

	it('new Out({textColor: false}) an instance of Out', () => expect(new Out({textColor: true})).toBeInstanceOf(Out))

	it('new Out({verbosity: 2}) an instance of Out', () => expect(new Out({verbosity: 2})).toBeInstanceOf(Out))

	it('new Out({verbosity: 2}) an instance of Out', () => expect(new Out({textColor: true, verbosity: 2})).toBeInstanceOf(Out))

	it('new Out({verbosity: 2}) an instance of Out', () => expect(new Out('name', {textColor: true, verbosity: 2})).toBeInstanceOf(Out))
})
