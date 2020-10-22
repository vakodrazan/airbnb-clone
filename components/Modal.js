import React, { useState } from 'react';
import ModalForm from './ModalForm';
import '../modal.css';

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
            <button onClick={openModal}>Open Modal</button>
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