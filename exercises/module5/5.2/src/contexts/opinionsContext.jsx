import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Créer le contexte
const OpinionsContext = createContext();

// Créer le ProviderWrapper
const OpinionsProvider = ({ children }) => {
  // State pour stocker les opinions sous forme d'objets { id, text, votes }
  const [opinions, setOpinions] = useState([]);

  // Fonction pour ajouter une nouvelle opinion avec un score initial de 1
  const addOpinion = (text) => {
    const newOpinion = { id: uuidv4(), text, votes: 1 };
    setOpinions([...opinions, newOpinion]);
  };

  // Fonction pour voter pour une opinion existante
  const voteForOpinion = (id) => {
    const updatedOpinions = opinions.map(opinion =>
      opinion.id === id ? { ...opinion, votes: opinion.votes + 1 } : opinion
    );
    setOpinions(updatedOpinions);
  };

  // Opinions triées par ordre décroissant des votes
  const sortedOpinions = opinions.sort((a, b) => b.votes - a.votes);

  return (
    <OpinionsContext.Provider value={{ sortedOpinions, addOpinion, voteForOpinion }}>
      {children}
    </OpinionsContext.Provider>
  );
};

export { OpinionsProvider, OpinionsContext };
