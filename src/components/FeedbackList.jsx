import React, { useContext } from 'react'
import TaskContext from '../context/taskContext'
import FeedbackItem from './FeedbackItem'

const FeedbackList = () => {
  const { tasks } = useContext(TaskContext)
  return (<>
    {
      tasks.map(task => {
        return (
          <>
            <FeedbackItem key={task.id} task={task} />
          </>
        )
      })
    }
  </>)
}

export default FeedbackList