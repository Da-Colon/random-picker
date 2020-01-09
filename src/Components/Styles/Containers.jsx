import styled from "styled-components";

export const AppWrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

export const LeftSideBar = styled.div`
  left: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: absolute;
  overflow-y: scroll;
  top: 0;
  width: 200px;

  @media (max-width: 768px) {
    display: none;
  }

  // Delete
  background-color: lightgrey;
`;

export const RightSideBar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: scroll;
  position: absolute;
  right: 0;
  top: 0;
  width: 200px;

  @media (max-width: 768px) {
    display: none;
  }

  // Delete
  background-color: lightgrey;
`;

export const TopBar = styled.div`
  width: 100%;
  height: 100px;

  // Delete
  background-color: lightblue;
`
