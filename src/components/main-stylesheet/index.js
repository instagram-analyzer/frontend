import styled from 'styled-components';

export const primary = "#FF006F";

export const secondary = "#DE2173";

export const accent = "#4C4774";

export const spacing = 15; 

export const paper = `box-shadow: 0px 2px 8px rgba(0,0,0,0.27); background-color: ${primary};`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: ${spacing}px auto;
    label{
        font-size: 0.9rem;
        font-weight: 400;
        margin-bottom: ${spacing/2.5}px;
    }
    input, select, button{
        font-size: 1rem;
        padding: ${spacing/1.5}px ${spacing/2}px;
        margin-bottom: ${spacing}px
    }
    button{
        width: 175px;
        margin: ${spacing/1.5}px auto 0 auto;
        padding: ${spacing/1.2}px ${spacing/2.4}px;
        border: unset;
        color: #FFFFFF;
        background-color: ${primary};
        font-size: 0.95rem;
        transition: .2s;
        &:hover{
            cursor: pointer;
            background-color: ${secondary};
        }
    }
`;