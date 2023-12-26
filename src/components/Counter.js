import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)

  const increamentHandler = () => {

    dispatch({ type: 'increament' })
  }
  const decreamentHandler = () => {
    dispatch({ type: 'decreament' })
  }

  const increamentHandlerBy5 = () => {

    dispatch({ type: 'increament5' })
  }
  const decreamentHandlerBy5 = () => {
    dispatch({ type: 'decreament5' })
  }

  const toggleCounterHandler = () => { };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={increamentHandler}>increament</button>
        <button onClick={decreamentHandler}>decreament</button>
      </div>
      <div>
        <button onClick={increamentHandlerBy5}>increament by 5</button>
        <button onClick={decreamentHandlerBy5}>decreament by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
