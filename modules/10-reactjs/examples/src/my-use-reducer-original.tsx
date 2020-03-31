import React, { useReducer, useState } from 'react'

type Action =
  | { type: 'started' }
  | { type: 'success'; result: number }
  | { type: 'error', error: Error}
  | { type: 'finally'}

interface State {
  number: number
  isLoading: boolean
  error: Error | null
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'started':
      return {isLoading: true, error:null, number:0}
    case 'success':
      return { ...state, number: action.result}
    case 'error':
      return {...state, number:0,  error: action.error}
    case 'finally':
      return {...state, isLoading: false}
  }
}

const initialState: State = {
  number: 0,
  isLoading: false,
  error:null
}


const getNumber = async () => {
  return new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      const number = Math.floor(Math.random() * 100)
      if (number > 50) {
        reject(new Error('There was an error'))
      }
      resolve(number)
    }, 1000)
  })
}
export const MyUseReducerOriginal: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)


  const handleClick = async () => {
    try {
      dispatch({ type: 'started' });
      dispatch({ type: 'success', result:  await getNumber()})
    } catch (e) {
      dispatch({ type: 'error', error: e })
    } finally{
      dispatch({ type: 'finally' })
    }
  }

  if (state.isLoading) {
    return <p>Loading</p>
  }

  return (
    <div>

      <button onClick={handleClick}>{state.number}</button>
    </div>
  )
}
