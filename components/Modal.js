import React, { useState } from 'react';
import ModalForm from './ModalForm';
import '../modal.css';
import SearchForm from './searchForm';

export default function Modal(props) {
    const [showModal, setShowModal] = useState(false);

    function openModal() {
        setShowModal(true);
    }
    function closeModal() {
        setShowModal(false);
    }
    return (
        <>
            <div className="search-form" onClick={openModal}>
                <SearchForm />
            </div>
            <ModalForm 
                showModal={showModal} 
                closeModal={closeModal} 
                setMaxGuest={props.setMaxGuest}
                setLocation={props.setLocation}
                searchStay={props.searchStay} 
            />
        </>
    )
}