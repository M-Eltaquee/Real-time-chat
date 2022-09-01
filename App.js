import * as React from 'react';
import { Typography, Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Login from './components/Login';
import Rooms from './components/rooms/Rooms';

const App = () => {
  const [user, setUser] = React.useState(null);
  const [isLogged, setIslogged] = React.useState(false);

  return (
    <React.Fragment>
      <h1>dddd</h1>
    </React.Fragment>
  );
};

export default App;
