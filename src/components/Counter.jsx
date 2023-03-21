
import { useDispatch, useSelector } from 'react-redux';
import './../App.css';
import { counterActions } from './../store/slices/counter';

function Counter() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch(counterActions.increment())
  }

  const decrease = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div className="App">
      <h1>Increment/Decrement</h1>
      <button onClick={increase}>+</button>

      <span>{value}</span>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default Counter;
