import React, { Component, useState } from 'react'

const AddTask = ({ onAdd }) => {

  /* constructor(props) {
    super(props);
    this.state = {

    }
  } */

  const [content, setContent] = useState('')
  const [date, setDate] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!content) {
      alert('Please add task');
    }

    onAdd({ content, date, reminder })
    setContent('')
    setDate('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input type='text' placeholder='Add task' value={content} onChange={(e) => setContent(e.target.value)} />
      </div>

      <div className='form-control'>
        <label>Date & Time</label>
        {/* <input type='date' />
        <input type='time' /> */}
        <input type='text' placeholder='Date and Time' value={date} onChange={(e) => setDate(e.target.value)} />
      </div>

      <div className='form-control form-control-check'>
        <label>Reminder</label>
        <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
      </div>

      <input type='submit' value='Save'className='btn btn-block' />
    </form>
  );
}

 
export default AddTask;