import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile';
import {useSelector } from 'react-redux';
// import { counterAuth } from './store/context';


function App() {
  // const dispatch = useDispatch()
  const auth = useSelector(state => state.auth.isAuthenticatin)
  return (
    <Fragment>
      <Header/>
      {auth && <Auth/>}
      {!auth && <UserProfile/>}
      <Counter />
    </Fragment>
  );
}

export default App;
