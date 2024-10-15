import React, { useContext } from 'react';
import { CountersContext } from './countersContexts';
function ResetButton() {
  const { resetAll } = useContext(CountersContext);

  return <button onClick={resetAll}>Reset All</button>;
}

export default ResetButton;
