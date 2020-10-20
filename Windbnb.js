import React from 'react';
import data from './stays.json';
import WindbnbList from './WindbnbList';
import SearchForm from './SearchForm';

export default function Windbnb() {
    return (
        <> 
            <SearchForm />
            <div className="content">
                {
                    data.map(stay => {
                        return (
                            <WindbnbList key={stay.rating} stay={stay} />
                        )
                    })
                }
            </div>
        </>
    )
}