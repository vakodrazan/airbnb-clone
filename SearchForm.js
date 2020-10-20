import React from 'react';

export default function SearchForm() {
    function searchLocation(e) {
        console.log("Search for location");
    }
    function searchGuest() {
        console.log("Search Guest");
    }

    return (
        <form className="search-form">
            <fieldset className="location">
                <label>Location</label>
                <input 
                    type="text" 
                    placeholder="Add location"
                    value=""
                    name="location"
                    onChange={searchLocation}
                />
            </fieldset>
            <fieldset className="guest">
                <label>Guests</label>
                <input 
                    type="text" 
                    placeholder="Add guests"
                    value=""
                    name="guest"
                    onChange={searchGuest}
                />
            </fieldset>
            <button>
                Search
            </button>
        </form>
    )
}