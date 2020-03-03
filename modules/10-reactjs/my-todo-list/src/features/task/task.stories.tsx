import React from 'react'
import { Task } from './task'

export default {
  title: 'Task',
  component: Task
}

export const taskIncompleted = () => <Task text="Tarea" icon="unchecked"/>
