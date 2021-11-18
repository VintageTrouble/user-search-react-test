import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes} from 'react-router-dom';

import { Header } from './components';
import { Home, User } from './Pages';
import { fetchUsers } from './redux/actions/users';


function App() {
  const dispatch = useDispatch();
  const items = useSelector(({ users }) => users.items);

  React.useEffect(() =>{
    dispatch(fetchUsers());
  }, [])

  return (  
    <>
      <Header data={items} />
      <div className="app-content">
        <Routes>
          <Route path='/user/:id' element={<User />} />
          <Route exact path='/' element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
