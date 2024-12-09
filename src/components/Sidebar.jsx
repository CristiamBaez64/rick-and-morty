import React from 'react';
import { useQuery } from '@apollo/client';
import { get_characters } from '../graphQL/characterDetails';
import { Link } from 'react-router-dom';
import CharacterDetails from './CharacterDetails';
import CharacterSidebar from './CharacterSidebar';


const Sidebar = () => {

  //Mapping Query GraphQL
  const { loading, data } = useQuery(get_characters);

  // Render Characters Result
  function renderCharacters() {
    return data.characters.data.map((character) => {
      return (
        <CharacterSidebar
          id= {character.id}
          image= {character.image}
          name= {character.name}
          species= {character.species}
          status= {character.status}
          gender= {character.gender}
        ></CharacterSidebar>
      )
    })
  }

  //Test Data
  const characters = [
    { id: '1', name: 'Rick Morty', species: 'Human', starred: true },
    { id: '2', name: 'Rick Prueba 2', species: 'Human', starred: true },
    { id: '3', name: 'Rick Prueba 3', species: 'Human', starred: false },
    { id: '4', name: 'Rick Prueba 4', species: 'Alien', starred: false },
    { id: '5', name: 'Rick Prueba 5', species: 'Human', starred: false },
    { id: '6', name: 'Rick Prueba 6', species: 'Alien', starred: false },
    { id: '7', name: 'Rick Prueba 7', species: 'Human', starred: false },
  ];

  return (
    <div className="w-1/3 p-4 border-r border-gray-200">
        <h4>Rick and Morty list</h4>
      <input
        type="text"
        placeholder="Search or filter results"
        className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
      />
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Starred Characters</h3>
        {/* <React.Fragment>
          { loading ? <p>Cargando...</p> : <ul>{renderCharacters()}</ul> }
        </React.Fragment> */}
        {characters.filter(char => char.starred).map(char => (
          <Link to={`/character/${char.id}`} key={char.id} className="block p-2 rounded-md hover:bg-gray-100">
            <span className="font-semibold">{char.name}</span> - {char.species}
          </Link>
        ))}
      </div>
      <div className="mt-6 space-y-4">
        <h3 className="text-xl font-bold">Characters</h3>
        {characters.filter(char => !char.starred).map(char => (
          <Link to={`/character/${char.id}`} key={char.id} className="block p-2 rounded-md hover:bg-gray-100">
            <span className="font-semibold">{char.name}</span> - {char.species}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
