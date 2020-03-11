import React, { useEffect, useState } from 'react'
import { TodoList } from './features/todo/ui/todo-list/todo-list'
import { Todo as TodoModel, Todo } from './features/todo/domain/todo'
import { TodoCreate } from './features/todo/ui/todo-create/todo-create'
import { Page } from './core/components/page/page'
import { httpClient } from './utils/httpClient'

export function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  function createTodo(todoText: string) {
    const newTodo = { id: Math.random() * 1000, text: todoText, completed: false }
    httpClient.post('/', newTodo).then(res => console.log(res))
    setTodos([...todos, newTodo])
  }
  type resTodo = {
    title: string
    id: number
    completed: boolean
  }
  const getTodos = async() =>{
    const response = httpClient.get('/').then(res => res.data)
    const TodosResponse : resTodo[]= await response
    const newTodos: Todo[] = []
    TodosResponse.map((todo) => {
      const Newtodo: Todo ={'text':'', 'id':0 ,'completed':false}
      Newtodo.text = todo.title
      Newtodo.id = todo.id
      Newtodo.completed = todo.completed
      newTodos.push(Newtodo)
    })
    setTodos(newTodos);
  }
  useEffect(()=>{
    getTodos();
  },[])
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

  return (
    <Page>
      <TodoList todos={todos} onCompleteTodo={completeTodo}/>
      <TodoCreate onCreate={createTodo} todos={todos}/>
    </Page>
  )
}
