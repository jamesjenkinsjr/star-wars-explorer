import React from 'react';
import Character from './Character';

export default function CharacterList(props) {
  const characterItems = props.characters.map((character, i) => <Character key={i} character={character}/>)
  return(
    <ul>
      {characterItems}
    </ul>
  );
}