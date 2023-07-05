import React, { useState } from 'react'
import { useInput } from '../CustomHooks/useInput';

export const UserForm = () => {

  const [firstName, bindFirstName, resetFirstName] = useInput('');
  const [lastName, bindLastName, reetLastName] = useInput('')

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    reetLastName();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name : </label>
        <input type="text" {...bindFirstName} />
      </div>
      <div>
        <label>Last Name : </label>
        <input type="text" {...bindLastName} />
      </div>
      <button>Submit</button>
    </form>
  )
}
