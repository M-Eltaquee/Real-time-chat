import React from 'react';
import {
  Container,
  Paper,
  Box,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import { MicOffIcon } from '@mui/icons-material/MicOff';
import { MicIcon } from '@mui/icons-material/Mic';
const recordReducer = (state, action) => {
  switch (action.type) {
    case 'koko':
      return action.value;
    default:
      return state;
  }
};
const Rooms = ({ activeUser }) => {
  const initialState = {
    activeUser: activeUser,
    value: '',
    isRecording: false,
    chats: [],
    Error: null,
    recordState: null,
  };
  const [recordState, recordDispatch] = React.useReducer(
    recordReducer,
    initialState
  );
  const handler = () => {
    recordDispatch({ type: 'koko', value: ' seka w doghry' });
  };

  console.log(recordState);
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
        <Typography variant="h6" component="h1">
          ffff
        </Typography>
        <Box component="form" sx={{ mt: 1 }} noValidate autoComplete="off">
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            multiline
            placeholder="Say somthing.."
            name="value"
          />
          {recordState.isRecording ? (
            <MicOffIcon className={styles.mic} />
          ) : (
            <MicIcon className={styles.mic} />
          )}
          <Button type="submite" variant="contained" fullWidth>
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Rooms;
