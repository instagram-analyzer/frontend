import styled from "styled-components";

import {
  paper,
  spacing,
  primary,
  secondary,
  accent
} from "../../../../components/main-stylesheet";

export const ProfileContainer = styled.div`
  display: flex;
  .graph-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 99%;
  }
  .graph-header {
    margin: ${spacing}px ${spacing}px 0 ${spacing}px;
  }
  button {
    padding: ${spacing / 1.6}px 0;
    border: unset;
    font-size: 1.1rem;
    font-weight: 100;
    ${paper};
    color: #ffffff;
    transition: 0.2s;
    &:hover {
      cursor: pointer;
      background-color: ${secondary};
    }
  }
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: ${spacing}px;
`;
