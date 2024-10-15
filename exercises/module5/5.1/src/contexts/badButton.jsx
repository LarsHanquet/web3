import React, { useContext } from 'react';
import { CountersContext } from './countersContexts';
function BadButton() {
  const { increaseBad } = useContext(CountersContext);
  
  return <button onClick={increaseBad}>Bad</button>;
}

export default BadButton;
