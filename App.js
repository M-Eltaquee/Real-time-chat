import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { Outlet, Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
const App = () => {
  const [user, setUser] = React.useState(null);
  const [isLogged, setIslogged] = React.useState(false);
  console.log(user, isLogged);
  return (
    <React.Fragment>
      <h1>d</h1>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="login" element={<LoginPage />}></Route>
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;
