import React from 'react';
import { Button } from '@mui/material';
const record = 'ji';
const recordReducer = (state, action) => {
  switch (action.type) {
    case 'koko':
      return action.value;
    default:
      return state;
  }
};
const Rooms = () => {
  const [recordState, recordDispatch] = React.useReducer(recordReducer, record);
  const handler = () => {
    recordDispatch({ type: 'koko', value: ' seka w doghry' });
  };

  console.log(recordState);
  return <Button onClick={handler}>Rooms</Button>;
};

export default Rooms;
