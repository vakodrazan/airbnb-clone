import React from 'react';


export default function SearchForm() {
    return (
        <form>
            <fieldset>
                <label>Location</label>
                <input 
                    type="text" 
                    placeholder="Add location"
                    value=""
                    name="location"
                />
            </fieldset>
            <fieldset>
                <label>Guests</label>
                <input 
                    type="text" 
                    placeholder="Add guests"
                    value=""
                    name="guest"
                />
            </fieldset>
            <button>
                Search
            </button>
        </form>
    )
}