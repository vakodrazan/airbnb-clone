import React from "react";

const svg = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>


export default function WindbnbList({stay}) {
    return (
        <div className="windbnb">
            <img className="windbnb-image" 
                src={stay.photo}
                alt={stay.title}
            />
            <div className="information">
                {stay.superHost && <small className="superhost">Super host</small>}
                <p className="type">{stay.type}{stay.beds &&`. ${stay.beds} beds` } </p>
                <span className="ratinng">{svg} {stay.rating}</span>
            </div>
            <p className="description">{stay.title}</p>
        </div>
    )
} 