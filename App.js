import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
const App = () => {
  const [user, setUser] = React.useState(null);
  const [isLogged, setIslogged] = React.useState(false);
  console.log(user, isLogged);
  return (
    <div>
      <Routes>
        <Route path="login" component={<LoginPage />} />
      </Routes>
      <LoginPage />
    </div>
  );
};

export default App;
