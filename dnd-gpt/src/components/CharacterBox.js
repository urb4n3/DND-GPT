import React from 'react';
import './CharacterBox.css'; // Create this CSS file for styling

const CharacterBox = ({ character }) => {
  return (
    <div className="character-box">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>{character.class}</p>
    </div>
  );
};

export default CharacterBox;
