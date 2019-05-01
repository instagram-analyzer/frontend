import styled from 'styled-components';

import { spacing } from '../main-stylesheet';

export const FooterSpacing = styled.div`
    height: 55px;
`;

export const FooterContainer = styled.nav`
    ${props => props.fixed && `position: fixed; margin-top: ${spacing/2}px`};
    bottom: 0;
    width: 100%;
    height: 55px;
    background-color: #FFFFFF;
    .inner-content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 99%;
        height: 55px;
        margin: 0 auto;
    }
`;

export const LeftSection = styled.div`
    display: flex;
    a{
        margin-left: ${spacing*2}px;
        color: black;
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 300;
        &:hover{
            text-decoration: underline;
        }
    }
`;

export const RightSection = styled.div`
    display: flex;
`;