import React from 'react';
import { Link } from 'react-router-dom';
import PilotList from '../PilotList/PilotList';

export default function StarshipPage({ ship, match }) {
    const id = match.params.id;
    console.log(ship[id])
    const pilots = ship[id].pilots;

    return (
        <div>
            <p>NAME: {ship[id].name}</p>
            <p>MODEL: {ship[id].model}</p>

            <p>PILOT NAME(S): {pilots.length ? <PilotList pilots={pilots} /> : <p>None</p>}</p>


            <Link to="/">RETURN</Link>
        </div>
    );
}