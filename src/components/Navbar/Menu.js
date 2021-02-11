import React, { useContext } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { theme } from "../../data/theme";

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${theme.color.tertiary};
  height: 100vh;
  width: 100%;
  font-size: 1.5rem;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 500ms;
  transform: translateX(-100%);
  transform: ${({ modalOpen }) => modalOpen ? 'translateX(0)' : 'translateX(100%)'};
  z-index: 9;
  
  @media (min-width: ${theme.media.phone}) {
    display: none;
  }

  a {
    font-size: 2rem;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${theme.color.dark};
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: ${theme.color.primary};
    }
  }
`;

const Menu = ({ modalOpen, setModalOpen }) => {
  const context = useContext(Context);
  return (
    <StyledModal modalOpen={modalOpen}>
      {modalOpen && (
        <>
          <Link onClick={() => (context.scrollTop, setModalOpen(!modalOpen))} to="/">
            Home
          </Link>
          <Link onClick={() => (context.scrollTop, setModalOpen(!modalOpen))} to="/babysitter">
            Babysitter
          </Link>
        </>
      )}
    </StyledModal>
  )
}

export default Menu;