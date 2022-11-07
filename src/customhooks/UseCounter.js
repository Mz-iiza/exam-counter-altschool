import {useState} from 'react'

export default function UseCounter(initialValue) {
    const [counter, setCounter] = useState(initialValue || 0);

    const increment = () => setCounter((count) => count + 1 );
    const decrement = () => setCounter((count) => count - 1);
    const reset = () => setCounter(initialValue || 0);

  return {counter, increment, decrement, reset}
};

