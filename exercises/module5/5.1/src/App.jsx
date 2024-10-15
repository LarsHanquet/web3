import React from 'react';
import { CountersProvider } from './contexts/countersContexts';
import GoodButton from './contexts/goodButton';
import ResetButton from './contexts/resetButton';
import BadButton from './contexts/badButton';
import OkButton from './contexts/okButton';
import Results from './contexts/result';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Système de vote de satisfaction</h1>

      <div>
        <GoodButton />
        <OkButton />
        <BadButton />
      </div>

      <h2>Résultats :</h2>
      <Results />

      <ResetButton />
    </div>
  );
}

export default function WrappedApp() {
  return (
    <CountersProvider>
      <App />
    </CountersProvider>
  );
}
