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
`;

export const PostsTable = styled.div`
  display: flex;
  width: 100%;
  margin: ${spacing}px;
  .MuiPaper-rounded-6{
    width: 100%;
    border-radius: 0px;
    ${paper};
    background-color: #FFFFFF;
  }
  .jss6{
    width: 100%;
    border-radius: 0px;
    ${paper};
    background-color: #FFFFFF;
  }
`;

export const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  .graph-header {
    margin: ${spacing}px ${spacing}px 0 ${spacing}px;
    font-size: 2rem;
    font-weight: 300;
    span{
      font-size: 0.8rem;
      font-weight: 400;
      margin-left: ${spacing/3}px;
    }
  }
`;

export const PostsContainer = styled.div`
  .posts-header{
    h2{
      margin: ${spacing}px ${spacing}px 0 ${spacing}px;
      font-size: 2rem;
      font-weight: 300;
      span{
        font-size: 0.8rem;
        font-weight: 400;
        margin-left: ${spacing/3}px;
      }
    }
  }
  .posts-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: ${spacing}px;
  }
`;
