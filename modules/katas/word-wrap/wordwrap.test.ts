import { Wordwrap } from './wordwrap'

describe('wordwrap', () => {
  const wordwrapper = new Wordwrap()
  it('should wrap each letter', () => {
    const expected = 'a\nb\nc\nd\ne'
    const actual = wordwrapper.wrapper('abcde', 1)
    expect(actual).toEqual(expected)
  })
  it('should wrap each letters', () => {
    const expected = 'ab\ncd\nef'
    const actual = wordwrapper.wrapper('abcdef', 2)
    expect(actual).toEqual(expected)
  })
  it('should wrap each word without separate them', () => {
    const expected = 'ab cde\nef'
    const actual = wordwrapper.wrapper('ab cde ef', 3)
    expect(actual).toEqual(expected)
  })
})
