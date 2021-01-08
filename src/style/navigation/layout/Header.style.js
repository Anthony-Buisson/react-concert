import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.ul`
  display: none;
  flex-direction: column;
  height: 0;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    height: auto;
  }
`;

export const Burger = styled.div`
  & img {
    height: 50px;
    width: auto;
    transition-property: transform;
  }
  &:hover ${Container}, &:focus ${Container} {
    display: flex;
    height: auto;
  }
  &:hover img, &:focus img{
    animation-name: spin;
    animation-duration: 1s;
    @keyframes spin { 
        from { 
            transform: rotate(0deg); 
        } to { 
            transform: rotate(360deg); 
        }
    }
    transform: rotate(360deg);
  }
  @media (min-width: 768px) {
    & img {
        display: none;
    }
  }
`;

