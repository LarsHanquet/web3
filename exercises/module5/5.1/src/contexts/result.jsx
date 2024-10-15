import React, { useContext } from 'react';
import { CountersContext } from './countersContexts';
function Results() {
  const { goodCount, okCount, badCount } = useContext(CountersContext);

  return (
    <div>
      <p>Good: {goodCount}</p>
      <p>Ok: {okCount}</p>
      <p>Bad: {badCount}</p>
    </div>
  );
}

export default Results;
