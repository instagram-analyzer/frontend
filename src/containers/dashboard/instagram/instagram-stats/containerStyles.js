import styled from 'styled-components';

import { spacing } from '../../../../components/main-stylesheet';

export const ProfileContainer = styled.div`
    display: flex;
    .graph-container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        width: 99%;
    }
    .graph-header{
        margin: ${spacing}px ${spacing}px 0 ${spacing}px;
    }
`;

export const PostsContainer = styled.div`
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-between;
    margin: ${spacing}px;
`;