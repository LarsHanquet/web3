import React, { useContext } from 'react';
import { CountersContext } from './countersContexts';
function OkButton() {
  const { increaseOk } = useContext(CountersContext);
  
  return <button onClick={increaseOk}>Ok</button>;
}

export default OkButton;
