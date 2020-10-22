import React from 'react';


export default function SearchForm() {
    return (
        <>
            <fieldset className="location">
                <label>Location</label>
                <input className="location--search" name="location" placeholder="Add location"/>
            </fieldset>
            <fieldset className="guest">
                <label>Guests</label>
                <input 
                    type="number"
                    name="numberOfGuest"
                    placeholder="Add guest"
                />
            </fieldset>
            <button type="button">Search</button>
        </>
    )
}