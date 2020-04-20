import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { MyExerciseFour } from './my-exercise-three'

describe('MyExerciseThree', () => {
  it('should have an initial state', () => {
    const { getByLabelText } = render(<MyExerciseFour />)
    const input = getByLabelText ('Input')
    expect(input).toHaveTextContent('')
  })

  it('should avoid vocals', () => {
    const { getByLabelText } = render(<MyExerciseFour />)
    const input = getByLabelText ('Input')
    fireEvent.change(input, {target: {value:'aa'}})
    expect(input).toHaveValue('')
  })

  it('should select consonants', () => {
    const { getByLabelText } = render(<MyExerciseFour />)
    const input = getByLabelText ('Input')
    fireEvent.change(input, {target: {value:'aba'}})
    expect(input).toHaveValue('b')
  })

})
