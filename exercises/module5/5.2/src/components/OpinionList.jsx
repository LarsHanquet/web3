import React, { useContext } from 'react';
import { OpinionsContext } from '../contexts/opinionsContext';

function OpinionList() {
  const { sortedOpinions, voteForOpinion } = useContext(OpinionsContext);

  return (
    <div>
      <h2>Liste des opinions :</h2>
      <ul>
        {sortedOpinions.map(opinion => (
          <li key={opinion.id}>
            {opinion.text} - Votes: {opinion.votes}
            <button onClick={() => voteForOpinion(opinion.id)}>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OpinionList;
