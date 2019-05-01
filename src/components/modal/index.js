import React from 'react';

import { 
    ModalOverlay, 
    ModalContainer, 
    ModalHeader,
    ModalContent
} from './modalStyles.js';

export const Modal = ({ Component, props, header, handleClose }) => (
    <ModalOverlay 
    onClick={(e) => {
        e.stopPropagation();
        // handleClose();
        console.log('clicked')
    }}
    >
        <ModalContainer>
            <ModalHeader>
                <h2>{header || "Provide a header prop"}</h2>
            </ModalHeader>
            <ModalContent>
                {Component ? 
                    <Component {...props} />:
                    <h1>Add a custom component prop</h1>
                }
            </ModalContent>
        </ModalContainer>
    </ModalOverlay>
)

export default Modal;