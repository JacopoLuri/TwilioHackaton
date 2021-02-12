import React from "react";
import styled from 'styled-components';
import { theme } from "../../data/theme";

//icons 

import { SiInstagram } from "react-icons/si";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

const StyledFooter = styled.div`
 width: 100%;
    background-color: ${theme.color.secondary};
    padding: ${theme.padding.standard};
    display: flex;
    flex-direction: row;
    color: ${theme.color.light};
    justify-content:space-around;           
    gap: ${theme.padding.double};
    
    svg {
        color: ${theme.color.tertiary};
        width: 50px;
        height: 50px;
        margin: ${theme.margin.standard};
    }


    








`;

const Footer = () => (
    <StyledFooter>
        <SiInstagram />
        <AiOutlineFacebook />
        <FiTwitter />
    </StyledFooter>
)













export default Footer