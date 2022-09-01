import * as React from 'react';
import { Typography, Box, Box, AppBar, Toolbar } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Login from './components/Login';
import Rooms from './components/rooms/Rooms';

const App = () => {
  const [user, setUser] = React.useState(null);
  const [isLogged, setIslogged] = React.useState(false);

  return (
    <Box>
      <AppBar position="">
        <Toolbar></Toolbar>
      </AppBar>
      {!isLogged ? (
        <Login setUser={setUser} setIslogged={setIslogged} />
      ) : (
        <Rooms activeUser={user.userName} />
      )}
    </Box>
  );
};

export default App;
