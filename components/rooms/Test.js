import React, { Component } from 'react';

import AudioReactRecorder, { RecordState } from 'audio-react-recorder';

const Test = () => {
  const [recordState, setRecordState] = React.useState(null);
  const start = () => {
    setRecordState(RecordState.start);
  };
  const stop = () => {
    setRecordState(RecordState.stop);
  };
  const onStop = () => {
    console.log('dd');
  };
  return (
    <div>
      <AudioReactRecorder state={recordState} onStop={onStop} />

      <button onClick={this.start}>Start</button>
      <button onClick={this.stop}>Stop</button>
    </div>
  );
};

export default Test;
