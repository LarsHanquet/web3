import React from 'react';
import { OpinionsProvider } from './contexts/opinionsContext';
import OpinionList from './components/OpinionList';
import AddOpinionForm from './components/AddOpinionForm';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Votez pour votre opinion préférée</h1>
      <OpinionList />
      <AddOpinionForm /> {/* Ajout du composant pour le champ d'ajout */}
    </div>
  );
}

export default function WrappedApp() {
  return (
    <OpinionsProvider>
      <App />
    </OpinionsProvider>
  );
}
``
