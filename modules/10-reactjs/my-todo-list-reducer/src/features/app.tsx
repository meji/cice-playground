import React, { useState, useReducer } from 'react'
import { Todo } from './todo'
import styles from './app.module.css'
import { bind } from '../utils/bind'

const cx = bind(styles)
const initialTodo: Todo = {
  completed: false,
  text: '',
  id: 0
}
type ActionTodo ={ type: 'fill'; text: string} | { type: 'delete' }
const reducer = (todo: Todo, action: ActionTodo): Todo => {
  switch (action.type) {
    case 'fill':
      return {...todo, completed: false, text: action.text, id: Math.floor(Math.random() * 1000) }
    case 'delete':
      return { ...todo, text: '' }
  }
}

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [todo, dispatch] = useReducer(reducer, initialTodo)

  function createTodo(todo: Todo) {
    const newTodo: Todo = todo
    setTodos([...todos, newTodo])
  }

  function completeTodo(id: number) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }

        return todo
      })
    )
  }
  const isTodoDuplicated = todos.map(todo => todo.text).includes(todo.text)

  return (
    <main>
      <ul>
        {todos.map(todo => (
          <li onClick={() => completeTodo(todo.id)} className={cx({ completed: todo.completed })}>
            {todo.text}
          </li>
        ))}
      </ul>
      <form
        onSubmit={event => {
          event.preventDefault()
          createTodo(todo)
          dispatch({type: 'delete'})
        }}
      >
        <label>
          Todo
          <input value={todo.text} onChange={event => dispatch({type: 'fill', text :event.target.value})} />
        </label>
        <button onClick={()=> dispatch({type: 'delete'})}>Clear todo</button>
        <button type="submit" disabled={isTodoDuplicated}>
          Create todo
        </button>
      </form>
    </main>
  )
}
