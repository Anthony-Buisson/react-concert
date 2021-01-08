import React from "react";
import styled from "styled-components";

export const Loader = styled.p`
    animation-name: ease;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    @keyframes ease { 
        from { 
            width: 0;
        } to { 
            width: 20px;
        }
    }
`;

export const Container = styled.p`
    vertical-align: middle;
`;
