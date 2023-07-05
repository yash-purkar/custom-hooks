import { useState } from 'react'

export const useCounter = (initialValue, value) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => prev + value);
  const decrement = () => setCount(prev => prev - value);
  const reset = () => setCount(initialValue);

  return [count, increment, decrement, reset];
}
