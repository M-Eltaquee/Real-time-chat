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
import Test from './components/rooms/Test';

const App = () => {
  const [user, setUser] = React.useState(null);
  const [isLogged, setIsLogged] = React.useState(false);
  const sea = JSON.parse(localStorage.getItem('loggedUser'));
  React.useEffect(() => {
    if (Boolean(sea)) {
      setUser(sea);
      setIsLogged(true);
    }
  }, []);
  const logoutHandler = () => {
    setUser(() => null);
    setIsLogged(() => false);
    localStorage.removeItem('loggedUser');
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
            {!isLogged && (
              <IconButton component={Link} to="/rooms">
                <Typography
                  variant="body1"
                  component="li"
                  sx={{ color: 'primary.contrastText', listStyle: 'none' }}
                >
                  Signup
                </Typography>
              </IconButton>
            )}

            {isLogged && (
              <React.Fragment>
                <IconButton component={Link} to="/rooms">
                  <Typography
                    variant="body1"
                    component="li"
                    sx={{ color: 'primary.contrastText', listStyle: 'none' }}
                  >
                    Chat Now
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
            )}
          </Toolbar>
        </Container>
      </AppBar>
      {!isLogged ? (
        <Login setUser={setUser} setIsLogged={setIsLogged} />
      ) : (
        // <Rooms activeUser={user} />
        <Test />
      )}
    </Box>
  );
};

export default App;
