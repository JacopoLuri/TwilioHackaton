import React from "react";
import { theme } from "../../data/theme";
import styled from 'styled-components';
import Banner from"../../Images/home-1.png";
import Girls from "../../Images/babysitter.jpg"

const StyledLinkContainer = styled.div`
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
        padding-bottom: ${theme.padding.double};
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
            max-height: ${theme.media.phone};
        }
    }
    @media (min-width: ${theme.media.tablet}) {
        /* flex-direction: row; */
        /* justify-content: center; */
      
    
        div {
            justify-content: center;
            gap: ${theme.padding.double};
            max-width: ${theme.media.phone};
        }
        img {
            max-width: ${theme.media.tablet};
        }
    }`;

 const StyleServiceContainer = styled.div`

width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: ${theme.padding.double};



h2 {
    font-size: ${theme.fontSize.medium};
        line-height: ${theme.lineHeight.medium};
        text-align: center;
}

h1 {
        font-size: ${theme.fontSize.large};
        font-weight: ${theme.fontWeight.bold};
        line-height: ${theme.lineHeight.large};
        text-align: center;
        color: ${theme.color.primary}
    }

    p {
        font-size: ${theme.fontSize.medium};
        line-height: ${theme.lineHeight.medium};
        text-align: center;
    }
  

  img {
      width : 50%;
      
  }
 
  @media (min-width: ${theme.media.phone}) {
        img {
            max-width: ${theme.media.phone};
        }
  } 



 `;

const StyleInstructionContainer = styled.div`
width:100%;
height: 300px;
background-color: ${theme.color.primary};
`;






const Home = () => {
    return(
        <>
        <StyledLinkContainer>
            <div>
            <h1>La Nurserie</h1>
            <p>A bit of help and a lot of love</p>
            </div>
            <img src={Banner} alt='Banner' />
            </StyledLinkContainer>
              <StyleServiceContainer>
               <h2>Our Services</h2>
               <img src={Girls} alt='girls' />
               <h1>Find A Babysitter</h1>
               <p>Do you need a Babysitter for now ? Follow the instruction below !</p>
               </StyleServiceContainer>
               


               <StyleInstructionContainer>
                    {/* what'app screenshot */}
                </StyleInstructionContainer>
                <div>
                    {/* Review section  */}
                </div>
            
            </>
      
      
    )
}

export default Home;
