import React from 'react';
import data from './stays.json';

export default function Windbnb() {
    return (
        <>
            <h2>Stays in Finland</h2>
            {
                data.map(stay => {
                    return (
                        <div key={stay.rating}>
                            <img className="card--image" 
                                src={stay.photo}
                                
                            />
                            <p>{stay.city}</p>
                        </div>
                    )
                })
            }
        </>
    )
}