import styled from 'styled-components';

import { paper, spacing, secondary } from '../main-stylesheet';

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 950px;
    height: 92vh;
    margin: 0 auto;
    text-align: center;
    h1{
        margin-bottom: ${spacing}px;
        font-size: 2.3rem;
        font-weight: 300;
    }
    h2{
        margin: unset;
        font-size: 1.7rem;
        font-weight: 200;
        color: #989696;
    }
    @media(max-width: 970px){
        width: 95%;
        margin: 0 auto;
    }
`;

export const SearchForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 75%;
    input{
        font-size: 1.4rem;
        font-weight: 200;
        padding: ${spacing/1.2}px ${spacing/1.5}px;
        margin: ${spacing*2}px 0;
        border: unset;
        ${paper};
        background-color: #FFFFFF;
        &::placeholder{
            color: #D4D4D4;
            font-weight: 100;
        }
    }
    button{
        width: 175px;
        margin: 0 auto;
        padding: ${spacing/1.2}px ${spacing/2.4}px;
        border: unset;
        color: #FFFFFF;
        ${paper};
        font-size: 1rem;
        transition: .2s;
        &:hover{
            cursor: pointer;
            background-color: ${secondary};
        }
    }
`;