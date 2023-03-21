import { useState } from "react";

export function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);

    function increment() {
        setCount(count + 1);
        setCount(prevCount=>prevCount+1)

    }

    function decrement() {
        setCount(prevCount => prevCount - 1);

    }
 
    return { count, increment, decrement };
}
