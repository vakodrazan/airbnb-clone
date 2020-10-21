import React from 'react';


export default function FormComponent(props) {
    return (
        <form onSubmit={props.searchStay} className="search-form">
            <fieldset className="location">
                <label>Location</label>
                <select 
                    name="location"
                    value={props.location}
                    onChange={props.onChange}
                >
                    <option value="">Add location</option>
                    <option value="helsinki">Helsinki</option>
                    <option value="turku">Turku</option>
                    <option value="vaasa">Vaasa</option>
                    <option value="oulu">Oulu</option>
                </select>
            </fieldset>
            <fieldset className="guest">
                <label>Guests</label>
                <input 
                    type="number"
                    name="numberOfGuest"
                    value={props.maxGuest}
                    onChange={props.setMaxGuest}
                    placeholder="How many of you will stay there"
                />
            </fieldset>
            <button type="submit">Search</button>
        </form>
    )
}