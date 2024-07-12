// useCounter.js
import { useState } from 'react';

const useCounter = (start = 0) => {
  const [count, setCount] = useState(start);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(start);

  return { count, increment, decrement, reset };
};

export default useCounter;
