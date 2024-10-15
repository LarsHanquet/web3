import React, { useState, useContext } from 'react';
import { OpinionsContext } from '../contexts/opinionsContext';

function AddOpinionForm() {
  const { addOpinion } = useContext(OpinionsContext);
  const [newOpinionText, setNewOpinionText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newOpinionText.trim()) {
      addOpinion(newOpinionText); // Ajoute l'opinion avec un score initial de 1
      setNewOpinionText(''); // Réinitialise le champ après l'ajout
    }
  };

  return (
    <div>
      <h2>Ajouter une nouvelle opinion :</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newOpinionText}
          onChange={(e) => setNewOpinionText(e.target.value)} // Mets à jour l'état en fonction de l'entrée utilisateur
          placeholder="Entrez votre opinion"
          required
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default AddOpinionForm;
