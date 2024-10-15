import React, { useContext } from 'react';
import { CountersContext } from './countersContexts';
function GoodButton() {
  const { increaseGood } = useContext(CountersContext);
  
  return <button onClick={increaseGood}>Good</button>;
}

export default GoodButton;
