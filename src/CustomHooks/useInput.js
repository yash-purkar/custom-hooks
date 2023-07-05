import  { useState } from 'react'

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const resetValue = () => setValue('');
  const bind = {
    value,
    onChange: (e) => setValue(e.target.value)
  }

  return [value, bind, resetValue];
}
