import React, {  useContext } from 'react'
import { bind } from '../utils/bind'
import styles from './app.module.css'
import { CounterContext } from './app'

const cx = bind(styles)


export const TodoClear: React.FC = () => {
  const {todoClear} = useContext(CounterContext)
  return(
    <>
      <button onClick={todoClear}>Limpiar todos</button>
    </>
    )
}
