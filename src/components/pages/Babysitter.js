import React from "react";
import styled from 'styled-components';
import { theme } from "../../data/theme";
import MainImg from "../../Images/tavola1.png"

const StyledTopSection = styled.div`
    width: 100%;
    background-color: ${theme.color.primary};
    padding: ${theme.padding.standard};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.padding.double};
    color: ${theme.color.light};

    div {
        display: flex;
        flex-direction: column;
        gap: ${theme.padding.standard};
        max-width: ${theme.media.phone};
    }

    img {
        width: 100%;
    }

    h1 {
        font-size: ${theme.fontSize.large};
        font-weight: ${theme.fontWeight.bold};
        line-height: ${theme.lineHeight.large};
        text-align: center;
    }

    p {
        font-size: ${theme.fontSize.medium};
        line-height: ${theme.lineHeight.medium};
        text-align: center;
    }

    @media (min-width: ${theme.media.phone}) {
        img {
            max-width: ${theme.media.phone};
        }
    }

    @media (min-width: ${theme.media.tablet}) {
        flex-direction: row;
        justify-content: center;
      
    
        div {
            justify-content: center;
            gap: ${theme.padding.double};
            max-width: ${theme.media.phone};
        }

        img {
            max-width: ${theme.media.phone};
        }
    }
`;

const Babysitter = () => (
    <StyledTopSection>
        <img src={MainImg} alt="Babysitter picture" />
        <div>
            <h1>Are you a babysitter?</h1>
            <p>Do you want to be enlisted as a babysitter, hundreds of parents need your help!!</p>
        </div>
    </StyledTopSection>

)

export default Babysitter;