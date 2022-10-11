import React, { useContext, useEffect, useState } from 'react'
import TaskContext from '../context/taskContext';
import Button from './Button';
import Card from './Card';
import FeedbackItem from './FeedbackItem';
import RatingSelect from './RatingSelect';

const TaskForm = () => {

  const { addHandler, taskEdit, updateHandler } = useContext(TaskContext)

  const [task, setTask] = useState("");
  const [rating, setRating] = useState("H");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log(taskEdit)
    if (taskEdit.edit === true) {
      setBtnDisabled(false);
      setTask(taskEdit.task.name);
      setRating(taskEdit.task.priority);
    }
  }, [taskEdit])

  const submitHandler = (evt) => {
    evt.preventDefault();
    const newTask = {
      priority: rating,
      name: task
    };
    // console.log(newTask);

    if (taskEdit.edit === true) {
      console.log(taskEdit.task.id)
      updateHandler(taskEdit.task.id, newTask)
    } else {
      addHandler(newTask);
    }
    setTask("");
  }
  const handleRating = (rating) => {
    console.log("in tf", rating);
    setRating(rating);
  }
  const handleTextChange = (evt) => {
    if (task.length === 0) {
      setBtnDisabled(true);
      setMessage("");
    } else if (task.trim().length < 10) {
      setBtnDisabled(true);
      setMessage("there should be minimum 10 characters");
    } else if (task.length > 10) {
      setBtnDisabled(false);
      setMessage(null);
    }

    setTask(evt.target.value)
  }
  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className="mb-1 ">
          <h2 className='m-2'>Set Your Priority</h2>
          <RatingSelect handleRating={handleRating} />
          <div className="d-flex flex-row ">
            <input
              type="text"
              value={task}
              className="form-control mb-3 "
              onChange={handleTextChange}
              placeholder="Enter Task" />
            {/* //onChange={evt=>setTask(evt.target.value)} */}
            <Button
              isDisabled={btnDisabled}
              type="submit"
            >Submit</Button>
          </div>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card >
  )
}

export default TaskForm