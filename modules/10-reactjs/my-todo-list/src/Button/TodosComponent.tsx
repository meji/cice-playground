import React, {useState} from "react";
import {Simulate} from "react-dom/test-utils";

interface Todo {checked: boolean, value: string}

function TodoLine({todo}: { todo: Todo }){
  const [todoCheck, setTodoCheck] = useState(false)
  const [todoText, setTodoText] = useState('Lista')
  function upateTodo(todoac: Todo){
    setTodos(todos.map(todo => todo === todoac ? todo : todoac ))
  }
  function asignCheck(e: any){
    const checked = e.target.querySelector(input).attr('checked')
    checked ? setTodoCheck(true) : setTodoCheck(false)
  }
  return (
    <label onClick={e => asignCheck(e)}>
      <input type="checkbox"/>
      <input type="text" value={todo.value} onChange ={e => setTodoText(e.target.value)}/>
    </label>
  )
}
function TodosList (){
  const [todos , setTodos] = useState<Todo[]>([{checked: false, value:'Escribe lo que quieras'}])
  function addTodo(){
    const todo : Todo = {checked: false, value: 'Escribe lo que quieras'}
    setTodos([...todos, todo])
  }
  const todoList = todos.map(todo=> {
    return (
      <TodoLine todo={todo} onClick={(todo)=>updateTodo(todo)} todos={todos}/>
    )
  })
  return(
    <>
      {todoList}
      <button onClick={addTodo}>Añadir Todo</button>
    </>
  )
}

export default TodosList;
