import React from 'react';


export default function SearchForm() {
    return (
        <>
            <form className="search-form container">
                <fieldset className="content-field location">
                    <label>Location</label>
                    <input 
                        className="location--search"
                        name="location"
                        placeholder="Add location"
                    >
                    </input>
                </fieldset>
                <fieldset className="content-field guest">
                    <label>Guests</label>
                    <input 
                        type="number"
                        name="numberOfGuest"
                        placeholder="How many of you will stay there"
                    />
                </fieldset>
                <fieldset className="content-field submit">
                    <button>Search</button>
                </fieldset>
            </form>
        </>
    )
}