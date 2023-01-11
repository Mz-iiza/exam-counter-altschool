
import {useState, useRef} from 'react'

export default function UseCounter(initialValue) {
    const [counter, setCounter] = useState(initialValue || 0);
    const inputRef = useRef(null);
    

    const increment = () => setCounter((count) => count + 1 );
    const decrement = () => setCounter((count) => count - 1);
    const reset = () => setCounter(initialValue || 0);
    const setvalue = () => setCounter(inputRef.current.value - `${counter}`)
  return {counter, increment, decrement, reset, setvalue, inputRef};
};

