import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import todos from '../tasks';
const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(todos)
  const [taskEdit, setTaskEdit] = useState({
    task: {},
    edit: false
  })

  const deleteHandler = (id) => {
    if (window.confirm('are you sure you want to delete?')) {
      setTasks(tasks.filter(task => task.id !== id));
    }
  }

  const addHandler = (task) => {
    task.id = uuidv4()
    console.log(task);
    setTasks([task, ...tasks])
  }

  const editHandler = (task) => {
    setTaskEdit({
      task,
      edit: true
    })
  }
  const updateHandler = (id, updatedTask) => {
    console.log(id, updatedTask)
    setTasks(
      tasks.map(task => (task.id === id ? { ...task, ...updatedTask } : task)))

  }
  return (
    <TaskContext.Provider value={{ tasks, setTasks, deleteHandler, addHandler, editHandler, updateHandler, taskEdit, setTaskEdit }}>
      {children}
    </TaskContext.Provider>)
}

export default TaskContext;