import React, { useState } from 'react';
import data from './stays.json';
import WindbnbList from './WindbnbList';
// import SearchForm from './SearchForm';

export default function Windbnb() {
    const [location, setLocation] = useState('');
    const [stayData, setStayData] = useState([]);

    function searchLocation(e) {
        e.preventDefault();
        setStayData(data);
    }


    

    const filteredStay = stayData.filter(stay => stay.city == location);
    const searchByLocation = (location == "") 
            ?data.map(stay => {
                return (
                    <WindbnbList key={stay.rating} stay={stay} />
                )
            })
            :filteredStay.map(stay => {
                    return (
                        <WindbnbList key={stay.rating} stay={stay} />
                    )
                })

    return (
        <> 
            {/* <SearchForm /> */}

            <form onSubmit={searchLocation}>
                <select 
                    name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                >
                    <option value="">-- Where do you want to go? --</option>
                    <option value="Helsinki">Helsinki</option>
                    <option value="Turku">Turku</option>
                    <option value="Vaasa">Vaasa</option>
                    <option value="Oulu">Oulu</option>
                </select>
                <button type="submit">Search</button>
            </form>
            <div className="content">
                {searchByLocation}
            </div>
        </>
    )
}