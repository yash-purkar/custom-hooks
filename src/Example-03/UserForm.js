import React, { useState } from 'react'

export const UserForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name : </label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </div>
      <div>
        <label>Last Name : </label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <button>Submit</button>
    </form>
  )
}
