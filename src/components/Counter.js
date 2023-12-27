import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {counterActions} from '../store/context'

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.showCounter)

  const increamentHandler = () => {

    dispatch(counterActions.increment())
  }
  const decreamentHandler = () => {
    dispatch(counterActions.decrement())
  }

  const increamentHandlerBy5 = () => {

    dispatch(counterActions.incrementBy5(5))
  }
  const decreamentHandlerBy5 = () => {
    dispatch(counterActions.decrementBy5(5))
  }

  const toggleCounterHandler = () => { 
    dispatch(counterActions.toggleEvent())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increamentHandler}>increament</button>
        <button onClick={decreamentHandler}>decreament</button>
      </div>
      <div>
        <button onClick={increamentHandlerBy5}>increament by 2</button>
        <button onClick={decreamentHandlerBy5}>decreament by 2</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
