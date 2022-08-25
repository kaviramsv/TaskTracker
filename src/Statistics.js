import React, { useContext } from 'react'
import { useState } from 'react'
import TaskContext from './context/taskContext'

const Statistics = () => {
  const { tasks } = useContext(TaskContext)
  return (
    <div><h3 style={{ textAlign: "center" }}>{tasks.length} Pending tasks</h3></div>
  )
}

export default Statistics