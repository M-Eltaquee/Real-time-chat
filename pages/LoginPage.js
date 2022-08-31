import * as React from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Avatar,
  Button,
  Paper,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Routes, Route } from 'react-router-dom';

const LoginPage = ({ setUser, setIslogged }) => {
  const [userName, setUserName] = React.useState({
    value: '',
    isValid: false,
  });
  const [password, setPassword] = React.useState({
    value: '',
    isValid: false,
  });
  const userNameInputRef = React.useRef();
  const passwordInputRef = React.useRef();
  const enterUserNameHandler = (e) => {
    if (userNameInputRef.current.value.length > 0) {
      return setUserName(() => {
        return {
          value: userNameInputRef.current.value,
          isValid: true,
        };
      });
    } else {
      return setUserName(() => {
        return {
          value: userNameInputRef.current.value,
          isValid: false,
        };
      });
    }
  };
  const enterPasswordHandler = () => {
    if (passwordInputRef.current.value.length > 5) {
      return setPassword(() => {
        return {
          value: passwordInputRef.current.value,
          isValid: true,
        };
      });
    } else {
      return setPassword(() => {
        return {
          value: passwordInputRef.current.value,
          isValid: false,
        };
      });
    }
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const loginData = {
      userName: userName.value,
      password: password.value,
    };
    setUser(loginData);
    setIslogged(true);
  };
  const isFormValid = userName.isValid && password.isValid;
  return (
    <Container component="main" maxWidth="xs">
      <Paper
        sx={{
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ backgroundColor: 'primary.main', mb: 1 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h6">Sign in</Typography>
        <Box
          onSubmit={formSubmitHandler}
          component="form"
          sx={{ mt: 1 }}
          onSubmit={formSubmitHandler}
        >
          <TextField
            variant="outlined"
            label="Your Name"
            size="small"
            fullWidth
            required
            inputProps={{ ref: userNameInputRef }}
            onChange={enterUserNameHandler}
          />
          <TextField
            variant="outlined"
            label="Your Password"
            fullWidth
            margin="normal"
            size="small"
            type="password"
            required
            inputProps={{
              ref: passwordInputRef,
            }}
            onChange={enterPasswordHandler}
          />
          <Button
            type="submite"
            variant="contained"
            disabled={!isFormValid}
            fullWidth
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;
