import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
const App = () => {
  const [user, setUser] = React.useState(null);
  const [isLogged, setIslogged] = React.useState(false);
  console.log(user, isLogged);
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          path="login"
          component={<LoginPage setUser={setUser} setIslogged={setIslogged} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
