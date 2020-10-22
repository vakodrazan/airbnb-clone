import React from 'react';
import FormComponent from './FormComponent';

export default function ModalForm(props) {
    const showHideClassName = props.showModal ? "modal openModal" : "modal closeModal";
  
    return (
        <div className={showHideClassName} onMouseUp={props.closeModal}>
            <div className="modal-main">
                <FormComponent 
                        setMaxGuest={props.setMaxGuest}
                        setLocation={props.setLocation}
                        searchStay={props.searchStay} 
                        closeModal={props.closeModal}
                    />
                <button className="modal-btn" onClick={props.closeModal}>Close</button>
                </div>
        </div>
    );
  };