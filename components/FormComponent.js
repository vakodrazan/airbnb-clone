import React from 'react';


export default function FormComponent(props) {
    return (
        <form onSubmit={props.searchStay}>
            <select 
                name="location"
                value={props.location}
                onChange={props.onChange}
            >
                <option value="">-- Where do you want to go? --</option>
                <option value="helsinki">Helsinki</option>
                <option value="turku">Turku</option>
                <option value="vaasa">Vaasa</option>
                <option value="oulu">Oulu</option>
            </select>
            <input 
                type="number"
                name="numberOfGuest"
                placeholder="How many of you will stay there"
            />
            <button type="submit">Search</button>
        </form>
    )
}