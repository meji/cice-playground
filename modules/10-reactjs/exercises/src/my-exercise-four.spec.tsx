import React from 'react'
import { JSDOM } from "jsdom"
const dom = new JSDOM()
import { render, fireEvent } from '@testing-library/react'
import { MyExerciseFour } from './my-exercise-four'
import { ExerciseTwo } from './exercise-two'


describe('MyExerciseFour', () => {
  it('should have an initial state', () => {
    const { getByRole } = render(<ExerciseTwo />)
    const button = getByRole('button')

    expect(button).toHaveTextContent('0')
  })

  it('should avoid vocals', () => {
    const { getByLabelText } = render(<MyExerciseFour />)
    const input = getByLabelText ('Input')
    fireEvent.change(input, {target: {value:'aa'}})
    expect(input).toHaveValue('')
  })
  it('should update the counter', () => {
    const { getByRole } = render(<MyExerciseFour />)
    const button = getByRole('button')

    fireEvent.click(button)

    expect(button).toHaveTextContent('1')
  })

  it('should update the counter when clicking more than once', () => {
    const { getByRole } = render(<MyExerciseFour />)
    const button = getByRole('button')

    fireEvent.click(button)
    fireEvent.click(button)
    fireEvent.click(button)

    expect(button).toHaveTextContent('3')
  })
  it('should write something to the title', () => {
    const { getByRole } = render(<MyExerciseFour />)
    const button = getByRole('button')
    fireEvent.click(button)
    expect(dom.window.document.title).toBeDefined()
  })
  it('should write a date to the title', () => {
    const { getByRole } = render(<MyExerciseFour />)
    const button = getByRole('button')
    fireEvent.click(button)
    expect(dom.window.document.title).toBe()
  })
})
