import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { get_characters } from '../graphQL/characterDetails';

const CharacterDetails = () => {
  const { id } = useParams();

  //Mapping Query GraphQL
  const { loading, data } = useQuery(get_characters);

  // Test Character
  const character = {
    id: '1',
    name: 'Rick Morty',
    species: 'Alien',
    status: 'Alive',
    occupation: 'Prueba',
  };

  return (
    <div className="w-2/3 p-4">
      <div className="flex flex-col items-center">
        <img
          src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          alt={character.name}
          className="w-24 h-24 rounded-full mb-4"
        />
        <h2 className="text-2xl font-bold">{character.name}</h2>
        <p className="text-gray-600">{character.species}</p>
        <p className="text-gray-600">Status: {character.status}</p>
        <p className="text-gray-600">Occupation: {character.occupation}</p>
      </div>
    </div>
  );
};

export default CharacterDetails;
