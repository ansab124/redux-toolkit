import Counter from "./components/Counter"
import './App.css';
import { useCounter } from "./customHooks/counter";

function App() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <>
      {/* <Counter /> */}


      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>


    </>
  );
}

export default App;
