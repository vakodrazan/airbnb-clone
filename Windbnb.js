import React, { useState } from 'react';
import data from './stays.json';
import WindbnbList from './WindbnbList';
import FormComponent from './components/FormComponent';

export default function Windbnb() {
    const [location, setLocation] = useState('');
    const [stayData, setStayData] = useState([]);
    const [maxGuest, setMaxGuest] = useState('');

    function searchStay(e) {
        e.preventDefault();
        setStayData(data);
    }

    // Map through the array when it isn't filtered yet
    const mapList = data.map(stay => {
        return (
            <WindbnbList key={stay.rating} stay={stay} />
        )
    });

    // ********* Filter by city name *********** \\
    // Filter the array by city
    const filteredStay = stayData.filter(stay => stay.city.toLowerCase() == location.toLowerCase());
    // Map through the filtered array
    const filteredByCity = filteredStay.map(stay => <WindbnbList key={stay.rating} stay={stay} />);

        // ************* FIlter by maxGuests ************ \\
    const filterGuest = stayData.filter(stay => stay.maxGuests >= maxGuest)
    const filteredByNumberOfGuests = filterGuest.map(stay => <WindbnbList key={stay.rating} stay={stay} />)

    const stayDataList = location ? filteredByCity : maxGuest ? filteredByNumberOfGuests :  mapList;

    return (
        <> 
            <FormComponent 
                location={location} 
                maxGuest={maxGuest}
                setMaxGuest={(e) => setMaxGuest(e.target.value)}
                onChange={(e) => setLocation(e.target.value)}
                searchStay={searchStay} 
                />
            <div className="content">
                {stayDataList}
            </div>
        </>
    )
}