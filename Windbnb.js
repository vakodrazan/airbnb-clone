import React from 'react';
import data from './stays.json';
import WindbnbList from './WindbnbList';

export default function Windbnb() {
    return (
        <>
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