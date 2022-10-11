import React, { useContext, useEffect, useState } from 'react'
import TaskContext from '../context/taskContext';
import Button from './Button';

const RatingSelect = ({ handleRating }) => {

  const { taskEdit } = useContext(TaskContext);

  const [selected, setSelected] = useState('H');

  useEffect(() => {
    console.log(taskEdit)
    if (taskEdit.edit === true) {
      setSelected(taskEdit.task.priority)
    }
  }, [taskEdit])
  const handleChange = event => {
    setSelected(event.target.value);
    console.log(event.target.value);
    handleRating(event.target.value);
  };
  return (

    <div className="mb-3" style={{ display: "flex", textAlgin: "center", justifyContent: "space-around" }} role="group" aria-label="Basic example">
      <label><input
        className='btn-red'
        style={{ accentColor: 'red' }}
        type="radio"
        name="H"
        value="H"
        onChange={handleChange}
        checked={selected === 'H'}
      />Highest</label>

      <label><input
        type="radio"
        className='btn-orange'
        style={{ accentColor: 'orange' }}
        name="M"
        value="M"
        checked={selected === 'M'}
        onChange={handleChange}
      />Medium</label>
      <label><input
        type="radio"
        className='btn-green'
        style={{ accentColor: 'green' }}
        name="L"
        value="L"
        checked={selected === 'L'}
        onChange={handleChange}
      />Lowest</label>
    </div>

  )
}

export default RatingSelect