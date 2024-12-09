import React from 'react';

//Component
export default function Character({ id, image, name, species, status, gender }) {
    return (
        <Link to={`/character/${id}`} key={id} className="block p-2 rounded-md hover:bg-gray-100">
            <span className="font-semibold">{name}</span> - {species}
        </Link>
    )
}