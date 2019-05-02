import styled from 'styled-components';

import { spacing, paper } from '../main-stylesheet';

export const NavSpacing = styled.div`
    height: 55px;
`;

export const NavbarContainer = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    height: 55px;
    ${paper};
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
    button{
        background-color: unset;
        border: unset;
        color: #FFFFFF;
        font-size: 1.3rem;
        text-shadow: 0px 2px 8px rgba(0,0,0,0.27);
        transition: .2s;
        i{
            margin-right: ${spacing/2}px;
        }
        &:hover{
            cursor: pointer;
            text-shadow: 0px 2px 8px rgba(0,0,0,0.8);
        }
        &:focus{
            outline: none;
        }
    }
`;

export const RightSection = styled.div`
    display: flex;
`;

export const UserContainer = styled.div`
    button{
        background-color: unset;
        border: unset;
        img{
            min-height: 40px;
            min-width: 40px;
            max-height: 40px;
            max-width: 40px;
            border-radius: 40px;
            border: 1px solid #FFFFFF;
            background-color: #FFFFFF;
            box-shadow: 0px 2px 8px rgba(0,0,0,0.27);
            transition: .2s;
        } 
        &:hover{
            cursor: pointer;
            img{
                box-shadow: 0px 2px 8px rgba(0,0,0,0.8);
            }
        }
        &:focus{
            outline: none;
        }
    }
`;

export const AlertsContainer = styled.div`
    button{
        i{
            font-size: 1.2rem;
        }
    }
`;