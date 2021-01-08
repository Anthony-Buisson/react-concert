import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const SubContainer = styled.div`
  display: none;
  flex-direction: column;
`;

export const HeaderLi = styled.li`
  list-style-type: none;
  padding: 10px 20px;
  display: flex;
      flex-direction: row;
  &:hover ${SubContainer} {
    display: flex;
  }
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

export const HeaderLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: ${props => props.isSmall ? '0.7em' : '1em'};
  &:hover {
    color: rgba(0,0,0,0.7);
  }
`;
