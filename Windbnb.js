import React, { useState } from 'react';
import data from './stays.json';
import WindbnbList from './WindbnbList';
import Modal from './components/Modal';

export default function Windbnb() {
    const [location, setLocation] = useState('');
    const [stayData, setStayData] = useState([]);
    const [maxGuest, setMaxGuest] = useState('');

    function searchStay(e) {
        e.preventDefault();
        setStayData(data);
    }

    // Map through the array when it isn't filtered yet
    const mapList = data.map(stay => <WindbnbList key={stay.rating} stay={stay} />);

    // ********* Filter by city name *********** \\
    // Filter the array by city
    const filteredStay = stayData.filter(stay => stay.city.toLowerCase() == location.toLowerCase());
    // Map through the filtered array
    const filteredByCity = filteredStay.map(stay => <WindbnbList key={stay.rating} stay={stay} />);

        // ************* FIlter by maxGuests ************ \\
    const filterGuest = stayData.filter(stay => stay.maxGuests >= maxGuest)
    const filteredByNumberOfGuests = filterGuest.map(stay => <WindbnbList key={stay.rating} stay={stay} />)

    // The final result with the filtered or the original list
    const stayDataList = location ? filteredByCity : maxGuest ? filteredByNumberOfGuests :  mapList;

    return (
        <> 
            <Modal
                setMaxGuest={setMaxGuest}
                setLocation={setLocation}
                searchStay={searchStay} 
            />
            <div className="content">
                {stayDataList}
            </div>
        </>
    )
}