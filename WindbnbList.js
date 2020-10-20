import React from "react";

export default function WindbnbList({stay}) {
    return (
        <div>
            <img className="card--image" 
                src={stay.photo}
                alt={stay.title}
            />
            <div>
                {stay.superHost && <small>Super host</small>}
                <p>{stay.type}</p>
                <span>{stay.rating}</span>
            </div>
            <p>{stay.title}</p>
        </div>
    )
} 