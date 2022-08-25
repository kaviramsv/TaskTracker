import React, { useState } from 'react'
import Button from './Button';

const RatingSelect = ({ handleRating }) => {
  const [selected, setSelected] = useState('H');
  const handleChange = event => {
    setSelected(event.target.value);
    console.log(event.target.value);
    handleRating(event.target.value);
  };
  return (

    <div className="mb-3" style={{ display: "flex", textAlgin: "center", justifyContent: "space-around" }} role="group" aria-label="Basic example">
      <input
        className='btn-red'
        style={{ accentColor: 'red' }}
        type="radio"
        name="H"
        value="H"
        onChange={handleChange}
        checked={selected === 'H'}
      />
      <input
        type="radio"
        className='btn-orange'
        style={{ accentColor: 'orange' }}
        name="M"
        value="M"
        checked={selected === 'M'}
        onChange={handleChange}
      />
      <input
        type="radio"
        className='btn-green'
        style={{ accentColor: 'green' }}
        name="L"
        value="L"
        checked={selected === 'L'}
        onChange={handleChange}
      />
    </div>

  )
}

export default RatingSelect