import styled from 'styled-components';

import { paper, spacing, primary, secondary, accent } from '../main-stylesheet';

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 24%;
    margin-bottom: ${spacing*3}px;
    button{
        padding: ${spacing/1.6}px 0;
        border: unset;
        font-size: 1.1rem;
        font-weight: 100;
        ${paper};
        color: #FFFFFF;
        transition: .2s;
        &:hover{
            cursor: pointer;
            background-color: ${secondary};
        }
    }
    @media(max-width: 1375px){
        width: 49%
    }
    @media(max-width: 640px){
        width: 100%
    }
`;

export const Post = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${spacing}px;
    ${paper};
    background-color: #FFFFFF;
    a{
        text-decoration: none;
    }
`;

export const PostContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 160px;
    padding: ${spacing}px;
    font-size: 0.9rem;
`;

export const PostItem = styled.h2`
    font-size: 1.2rem;
    padding: ${spacing/1.5}px ${spacing/2.7}px;
    border-bottom: ${props => props.border && `1px solid rgba(0, 0, 0, 0.1)`};
    i{
        color: ${props => props.color ? props.color : "black"};
        margin-right: ${spacing/2.8}px;
    }
`;

export const PostImage = styled.div`
    width: 100%;
    height: 360px;
    margin: unset;
    padding: unset;
    background-image: url(${props => props.image});
    background-color: ${accent};
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    h2{
        display: flex;
        justify-content: center;
        width: 30%;
        padding: ${spacing/1.3}px;
        background-color: ${primary};
        color: #FFFFFF;
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 300;
    }
`;