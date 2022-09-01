import React from 'react';
import { Button } from '@mui/material';

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
  return <Button onClick={handler}>vvv{activeUser}</Button>;
};

export default Rooms;
