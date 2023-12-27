import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import {counterAuth} from '../store/context'

const Header = () => {

  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth.isAuthenticatin)

  const logOutHandler = (event)=>{
    event.preventDefault()
    dispatch(counterAuth.logOut())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            {!auth && <a href='/'>My Products</a>}
          </li>
          <li>
           {!auth && <a href='/'>My Sales</a>}
          </li>
          <li>
            {!auth && <button onClick={logOutHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
