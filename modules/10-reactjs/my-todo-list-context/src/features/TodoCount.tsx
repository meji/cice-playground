import React, { createContext, useContext, useState } from 'react'
import { bind } from '../utils/bind'
import styles from './app.module.css'
import { CounterContext } from './app'

const cx = bind(styles)


export function TodoCount() {
  const {todoStore} = useContext(CounterContext)
  const number = todoStore.length
  return(
    <p>Contadores: {number}</p>
    )
}
