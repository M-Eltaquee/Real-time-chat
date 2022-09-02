import * as React from 'react';
import {
  Typography,
  Box,
  Box,
  AppBar,
  Toolbar,
  Avatar,
  IconButton,
  Container,
} from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Login from './components/Login';
import Rooms from './components/rooms/Rooms';

const App = () => {
  const [user, setUser] = React.useState(null);
  const [isLogged, setIslogged] = React.useState(false);
  const logoutHandler = () => {
    setUser(() => null);
    setIslogged(() => false);
  };

  return (
    <Box>
      <AppBar position="static">
        <Container component="nav">
          <Toolbar component="ul">
            <IconButton>
              <Avatar>C</Avatar>
            </IconButton>
            <Box sx={{ flex: 1 }}></Box>
            <React.Fragment>
              <h1>dddd</h1>
              <IconButton component={Link} to="/rooms">
                <Typography
                  variant="body1"
                  component="li"
                  sx={{ color: 'primary.contrastText' }}
                >
                  Logout
                </Typography>
              </IconButton>

              <IconButton onClick={logoutHandler}>
                <Typography
                  variant="body1"
                  component="li"
                  sx={{ color: 'primary.contrastText', listStyle: 'none' }}
                >
                  Logout
                </Typography>
              </IconButton>
            </React.Fragment>
          </Toolbar>
        </Container>
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
