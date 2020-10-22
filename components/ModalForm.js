import React from 'react';
import '../modal.css';
import FormComponent from './FormComponent';

export default function ModalForm(props) {
    const showHideClassName = props.showModal ? "modal openModal" : "modal closeModal";
  
    return (
        <div className={showHideClassName}>
            <div className="modal-main">
                <FormComponent 
                        setMaxGuest={props.setMaxGuest}
                        setLocation={props.setLocation}
                        searchStay={props.searchStay} 
                        closeModal={props.closeModal}
                    />
                <button onClick={props.closeModal}>close</button>
                </div>
        </div>
    );
  };