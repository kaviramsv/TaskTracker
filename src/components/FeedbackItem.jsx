import React, { useContext } from 'react'
import Card from './Card'
import { FaTimes, FaEdit } from 'react-icons/fa'
import TaskContext from '../context/taskContext';
const FeedbackItem = ({ task }) => {
  // const handleDelete = () => {
  //   deleteHandler(task.id);
  // }
  const { deleteHandler, editHandler } = useContext(TaskContext);
  return (
    < Card >
      <div className='num-display' style={{ backgroundColor: task.priority === 'H' ? 'red' : (task.priority === 'L' ? 'green' : (task.priority === 'M' ? 'orange' : 'whitesmoke')) }}><h3>{task.priority}</h3></div>
      <button className='close' onClick={() => deleteHandler(task.id)}>
        <FaTimes color='purple' />
      </button>
      <button className='edit' onClick={() => editHandler(task)}>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{task.name}</div>
    </Card >
  )
}

export default FeedbackItem