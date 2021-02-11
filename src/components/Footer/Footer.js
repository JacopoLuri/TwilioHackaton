import React from "react";
import styled from 'styled-components';
import { theme } from "../../data/theme";
import Babysitter from "../pages/Babysitter";
import Home from "../pages/Home";

//icons 

import {SiInstagram} from "react-icons/si";
import {AiOutlineFacebook} from "react-icons/ai";
import {FiTwitter} from "react-icons/fi";

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
        width: 10%;
        height: 10%;
        margin: ${theme.margin.standard};
    }

/* 
ul {
   list-style-type: none;
   display:flex;
   flex-wrap:wrap;
   justify-content:center;
   gap: ${theme.padding.small};
}



h2 {
        font-size: ${theme.fontSize.medium};
        line-height: ${theme.lineHeight.medium};
        text-align: center;
    }


     a {
        font-size: ${theme.fontSize.small};
        line-height: ${theme.lineHeight.medium};
        text-align: center;
    }

    */
`;



 






const Footer = () => (
    <StyledFooter>
        {/* <div>
    <h2>Search</h2>
   <ul>
       <li>
           <a href={Home}> Find a babysitter</a>
       </li>
       <li>
           <a href={Babysitter}>Find babysitting job</a>
       </li>
   </ul>
   <h2>About</h2>
   <ul>
       <li>
           <a>La nurserie</a>
       </li>
       <li>
           <a>Help & FAQ</a>
       </li>
   </ul>
   
   </div>
   <div>
       <h2>Popular</h2>
       <ul>
       <li>
           <a>Babysitter London</a>
       </li>
       <li>
           <a>Babysitter Manchester</a>
       </li>
       <li>
           <a>Babysitter Bristol</a>
       </li>
       <li>
           <a>Babysitter Brighton</a>
       </li>
   </ul>
   <h2>Contact</h2>
   <ul>
       <li>
           <a>Facebook</a>
       </li>
       <li>
           <a>Twitter</a>
       </li>
       <li>
           <a>Instagram</a>
       </li>
   </ul>
   </div>
 */}


   <SiInstagram />
   <AiOutlineFacebook />
   <FiTwitter/>


    </StyledFooter>




)













export default Footer