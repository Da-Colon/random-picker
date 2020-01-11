import styled, { keyframes } from "styled-components";

export const PageTitle = styled.h1`
  text-align: center;
  padding-top: 16px;
  font-size: 1.6rem;
`;

export const ListTitles = styled.h2`
  text-align: center;
  padding: 16px;
  font-size: 1.3rem;
`;

export const Ol = styled.ol`
  margin: 0 auto;
  padding: 16px;
  height: 89vh;
  width: 150px;
  overflow-y: scroll;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5), 2px 2px 10px rgba(0, 0, 0, 0.5),
    3px 4px 12px rgba(0, 0, 0, 0.5);
`;
export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 4px;
`;

const chosenName = keyframes`
  0% {font-size: 1%; padding-top: 0%;},
  20% {font-size: 15%; padding-top: 20%;},
  40% {font-size: 20%; padding-top: 40%;},
  60% {font-size: 40%; padding-top: 60%;},
  80% {font-size: 70%; padding-top: 80%;},
  100% {font-size: 100%; padding-top: 100%;}
`;
export const Name = styled.p`
  display: static;
  text-align: center;
  font-size: 3rem;
  padding-top: 100px;
  animation-name: ${chosenName};
`;
