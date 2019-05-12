import styled from 'styled-components';

import { paper, spacing, primary } from '../../main-stylesheet';

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    div{
        display: flex;
        width: 515px;
        margin: 0 ${spacing/2}px;
    }
    .view-posts-button{
        width: 500px;
        margin: ${spacing}px;
        padding: ${spacing/2}px;
        border: unset;
        font-size: 0.9rem;
        ${paper};
        color: #FFFFFF;
        background-color: ${primary};
        transition: .2s;
        &:hover{
            cursor: pointer;
            box-shadow: 0px 3px 10px rgba(0,0,0,0.5);
        }
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 33.3%;
    height: 60px;
    margin: ${spacing/2}px ${spacing/2}px;
    padding: ${spacing/1.5}px;
    ${paper};
    background-color: #FFFFFF;
    h3{
        font-size: 0.7rem;
        font-weight: 300;
        color: #9F9F9F;
    }
    h2{
        margin-top: ${spacing/1.35}px;
        font-size: 1.9rem;
        font-weight: 300;
    }
`;