import styled from 'styled-components';

import  { paper, spacing, primary } from '../main-stylesheet';

export const ModalOverlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    ${paper};
    background-color: #FFFFFF;
    div{
        padding: ${spacing}px;
    }
`;

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55px;
    padding: ${spacing}px ${spacing}px;
    background-color: ${primary};
    color: #FFFFFF;
    font-size: 1.6rem;
    text-align: center;
`;

export const ModalContent = styled.div`
    padding: ${spacing}px;
`;