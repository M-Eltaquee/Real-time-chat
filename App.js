import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

const App = () => {
  const [user, setUser] = React.useState(null);
  const [isLogged, setIslogged] = React.useState(false);
  console.log(user, isLogged);
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="login"
          element={<LoginPage setUser={setUser} setIslogged={setIslogged} />}
        />
        <Route
          path="*"
          element={
            <h1 sx={{ height: '100%', justifyContent: 'center' }}>404</h1>
          }
        />
      </Routes>
    </React.Fragment>
  );
};

export default App;
