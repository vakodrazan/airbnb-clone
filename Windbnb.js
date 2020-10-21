import React, { useState } from 'react';
import data from './stays.json';
import WindbnbList from './WindbnbList';
import FormComponent from './components/FormComponent';
// import SearchForm from './SearchForm';

export default function Windbnb() {
    const [location, setLocation] = useState('');
    const [stayData, setStayData] = useState([]);

    function searchStay(e) {
        e.preventDefault();
        setStayData(data);
    }

    // Filter the array by city
    const filteredStay = stayData.filter(stay => stay.city.toLowerCase() == location.toLowerCase());

    // Map through the array when it isn't filtered yet
    const mapList = data.map(stay => {
                        return (
                            <WindbnbList key={stay.rating} stay={stay} />
                        )
                    });

    // Map through the filtered array
    const filteredList = filteredStay.map(stay => {
                            return (
                                <WindbnbList key={stay.rating} stay={stay} />
                            )
                        });

    // Just return all the list when it isn't filtered
    const searchByLocation = (location == "") 
            ? mapList
            : filteredList
        ;

    return (
        <> 
            {/* <SearchForm /> */}

            <FormComponent 
                location={location} 
                onChange={(e) => setLocation(e.target.value)}
                searchStay={searchStay} 
                />
            <div className="content">
                {searchByLocation}
            </div>
        </>
    )
}