import styled from 'styled-components';

import { spacing } from '../main-stylesheet'

export const EnagagementLabel = styled.div`
    padding: ${spacing/2}px ${spacing/1.5}px;
    color: #FFFFFF;
    background-color: ${props => props.bg}
    width: 50px;
    border-radius: 4px;
    text-align: center;
`;