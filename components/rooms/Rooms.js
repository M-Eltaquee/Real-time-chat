import React from 'react';
import {
  Container,
  Paper,
  Box,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import MicOffIcon from '@mui/icons-material/MicOff';
import MicIcon from '@mui/icons-material/Mic';
import AudioReactRecorder, { RecordState } from 'audio-react-recorder';

const recordReducer = (state, action) => {
  switch (action.type) {
    case 'koko':
      return { ...state, recordState: action.value };
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
  const [recording, recordingDispatch] = React.useReducer(
    recordReducer,
    initialState
  );
  const handler = () => {
    recordDispatch({ type: 'koko', value: ' seka w doghry' });
  };

  console.log(recording);
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
          Chat Now
        </Typography>
        <Box
          component="form"
          sx={{ mt: 1, textAlign: 'center' }}
          noValidate
          autoComplete="off"
        >
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            multiline
            placeholder="Say somthing.."
            name="value"
          />
          <Box sx={{ my: 2 }}>
            {recording.isRecording ? <MicOffIcon /> : <MicIcon />}
          </Box>
          <Button type="submite" variant="contained" fullWidth>
            Submit
          </Button>
        </Box>
      </Paper>
      <Box>
        <AudioReactRecorder
          state={recording.recordState}
          onStop
          canvasWidth="0"
          canvasHeight="0"
        />
      </Box>
    </Container>
  );
};

export default Rooms;
