import React from 'react';
import AddGuest from './AddGuest';
// import '../modal.css';

export default function FormComponent(props) {
    function counterGuest() {
        return (
            <>
                <AddGuest />
            </>
        )
    }

    return (
        <form onSubmit={props.searchStay} className="search-form container">
            <fieldset className="content-field location">
                <label>Location</label>
                <select 
                    className="location--search"
                    name="location"
                    value={props.location}
                    onChange={(e) => props.setLocation(e.target.value)}
                >
                    <option value="">Add location</option>
                    <option value="helsinki">Helsinki</option>
                    <option value="turku">Turku</option>
                    <option value="vaasa">Vaasa</option>
                    <option value="oulu">Oulu</option>
                </select>
            </fieldset>
            <fieldset className="content-field guest">
                <label>Guests</label>
                <input 
                    type="number"
                    name="numberOfGuest"
                    value={props.maxGuest}
                    onChange={(e) => props.setMaxGuest(e.target.value)}
                    onClick={counterGuest}
                    placeholder="How many of you will stay there"
                />
            </fieldset>
            <fieldset className="content-field submit">
                <button type="submit" onClick={props.closeModal}>Search</button>
            </fieldset>
        </form>
    )
}