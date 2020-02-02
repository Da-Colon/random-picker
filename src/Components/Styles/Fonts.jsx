import styled from "styled-components";

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
  background: linear-gradient(
    rgba(255, 255, 255, 0.8),
    rgba(200, 200, 230, 0.9),
    rgba(255, 255, 230, 1)
  );
  // margin: 0 auto;
  padding: 16px; 
  margin-bottom: 16px; 
  height: 100%;
  width: 175px;
  overflow-y: scroll;
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5), 2px 2px 10px rgba(0, 0, 0, 0.5),
    3px 4px 12px rgba(0, 0, 0, 0.5);
`;
export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 4px;
`;

export const Name = styled.p`
  display: static;
  text-align: center;
  font-size: 2.5rem;
  padding-top: 80px;
`;
