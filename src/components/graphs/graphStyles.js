import styled from 'styled-components';

import { paper, spacing } from '../main-stylesheet';

export const GraphContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    height: 360px;
    margin: ${spacing}px;
    padding: ${spacing}px;
    ${paper};
    background-color: #FFFFFF;
`;

export const MainContainer = styled.div`
    height: 100%;
    width: 99%;
`;