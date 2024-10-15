import React, { createContext, useState } from 'react';

// Créer le contexte
const CountersContext = createContext();

// Créer le ProviderWrapper
const CountersProvider = ({ children }) => {
  // State pour stocker les compteurs
  const [goodCount, setGoodCount] = useState(0);
  const [okCount, setOkCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  // Fonctions pour incrémenter les compteurs
  const increaseGood = () => setGoodCount(goodCount + 1);
  const increaseOk = () => setOkCount(okCount + 1);
  const increaseBad = () => setBadCount(badCount + 1);

  // Fonction pour réinitialiser tous les compteurs
  const resetAll = () => {
    setGoodCount(0);
    setOkCount(0);
    setBadCount(0);
  };

  return (
    <CountersContext.Provider
      value={{ goodCount, okCount, badCount, increaseGood, increaseOk, increaseBad, resetAll }}
    >
      {children}
    </CountersContext.Provider>
  );
};

export { CountersProvider, CountersContext };
