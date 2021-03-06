import styled from "styled-components";

import { spacing, paper } from "../main-stylesheet";

export const ProfileCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 470px;
  margin: ${spacing}px;
  padding: ${spacing}px;
  ${paper};
  text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  img {
    min-width: 135px;
    min-height: 135px;
    max-height: 135px;
    max-width: 135px;
    border: 2px solid #ffffff;
    border-radius: 85px;
    margin: ${spacing / 1.5}px;
    background-color: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.27);
  }
  div {
    display: flex;
    flex-direction: column;
    width: 75%;
    color: #ffffff;
    margin-right: ${spacing / 1.5}px;
    h3 {
      font-size: 0.8rem;
    }
    h1 {
      font-size: 1.4rem;
      margin-top: 7px;
      i {
        margin-right: 10px;
      }
    }
    h2 {
      margin: 10px 0;
      font-size: 1.1rem;
      font-weight: 200;
      line-height: 1.2rem;
    }
  }
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  width: 93%;
  margin: ${spacing / 1.2}px ${spacing}px;
  padding-top: ${spacing}px;
  border-top: 2px solid #ffffff;
  color: #ffffff;
  font-size: 1rem;
  div {
    width: 25%;
    text-align: center;
    padding: ${spacing / 1.4}px ${spacing}px;
    h4 {
      font-size: 0.7rem;
      font-weight: 300;
      margin-top: 5px;
    }
  }
  .middle {
    border-right: 1px solid #ffffff;
    border-left: 1px solid #ffffff;
  }
`;
