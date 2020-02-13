import { Prime } from './prime-class'

describe('', () => {
  it('should create an array 1 element', () => {
    const given = 2
    const calculator = new Prime()

    const actual = calculator.calculate(given)

    expect(actual).toStrictEqual([2])
  })
  it('should create an array with factorial 2 elements', () => {
    const given = 10
    const calculator = new Prime()

    const actual = calculator.calculate(given)

    expect(actual).toEqual([2,5])
  })
  it('should create an array with factorial 2 elements', () => {
    const given = 10
    const calculator = new Prime()

    const actual = calculator.calculate(given)

    expect(actual).toEqual([2,5])
  })



})

