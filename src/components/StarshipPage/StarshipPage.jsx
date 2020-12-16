import React from 'react';
import { Link } from 'react-router-dom';

export default function StarshipPage({ ship, match }) {
    const id = match.params.id;

    return (
        <div>
            <p>NAME: {ship[id].name}</p>
            <p>MODEL: {ship[id].model}</p>

            <Link to="/">RETURN</Link>
        </div>
    );
}