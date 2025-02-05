import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Increment, Decrement , reset } from './redux/reducer';

function App() {
  const count = useSelector((State) => State.count);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h2>Redux</h2>

      <p>Count: {count}</p>
      <button onClick={() => dispatch(Increment())}>Increment</button>
      <button onClick={() => dispatch(Decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;
