import React from 'react';
import FormComponent from './FormComponent';


export default function SearchForm(props) {
    return (
        <>
            <FormComponent 
                setMaxGuest={props.setMaxGuest}
                setLocation={props.setLocation}
                searchStay={props.searchStay} 
                closeModal={props.closeModal}
            
            />
        </>
    )
}