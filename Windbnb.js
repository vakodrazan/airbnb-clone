import React from 'react';
import data from './stays.json';
import WindbnbList from './WindbnbList';

export default function Windbnb() {
    return (
        <>
            <h2>Stays in Finland</h2>
            {
                data.map(stay => {
                    return (
                        <WindbnbList key={stay.rating} stay={stay} />
                    )
                })
            }
        </>
    )
}