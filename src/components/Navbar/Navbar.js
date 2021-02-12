import React, { useContext } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { theme } from "../../data/theme";
import Logo from "../../Images/tavola1.png";

const StyledNavBar = styled.div`
    width: 100%;
    height: 116px;
    background-color: ${theme.color.primary};
    padding: ${theme.padding.standard};
    display: flex;
    justify-content: space-between;

    img {
        width: 100px;
        height: 100px;
        padding: ${theme.padding.standard};
    }
`;

const StyledLinkContainer = styled.div`
    display: none;
    height: 100%;

    @media (min-width: ${theme.media.phone}) {
        display: flex;
        
        align-items: center;
        gap: ${theme.padding.double};

        a {
           text-decoration: none;
           color: ${theme.color.light};
           font-weight: ${theme.fontWeight.bold};
           letter-spacing: 2px;
           transition: color 0.3s linear; 

            &:hover {
                color: ${theme.color.secondary};
        }
    }
  }
`;

const Navbar = () => {
    const context = useContext(Context);
    return (
        <StyledNavBar>
            <Link onClick={() => (context.scrollTop)} to="/">
                <img src={Logo} alt="Logo" />
            </Link>
            <StyledLinkContainer>
                <Link onClick={() => (context.scrollTop)} to="/">
                    HOME
                </Link>
                <Link onClick={() => (context.scrollTop)} to="/babysitter">
                    BABYSITTER
                </Link>
            </StyledLinkContainer>
        </StyledNavBar>
    )
}

export default Navbar;