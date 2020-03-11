import React, { useState } from 'react'
import { Button } from '../../../../core/components/button/button'
import { Todo as TodoModel } from '../../domain/todo'

interface Props {
  onCreate(todoText: string): void
  todos: TodoModel[]
}

export const TodoCreate: React.FunctionComponent<Props> = ({ onCreate, todos }) => {
  const [todoText, setTodoText] = useState('')
  const [disabledButton, setDisabledButton] = useState(false)

  const clearTodo = () => setTodoText('')

  const onChange = (e:  React.FormEvent <HTMLInputElement>) => {
    setTodoText(e.currentTarget.value);
    todos.find(todo => todo.text === e.currentTarget.value) !== undefined ? setDisabledButton(true) : setDisabledButton(false)
  }
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        onCreate(todoText)
        clearTodo()
      }}
    >
      <label>
        Todo
        <input value={todoText} onChange={e => onChange(e) } />
      </label>
      <Button onClick={clearTodo}>Clear todo</Button>
      <Button submit disabledP={disabledButton}>Create todo</Button>
    </form>
  )
}
