import { React, useState } from "react";
import { theme } from "../../data/theme";
import styled from 'styled-components';

// images
import Banner from "../../Images/home-1.png";
import Girls from "../../Images/babysitter.jpg";
import screenshot1 from "../../Images/instructions1.jpeg";
import screenshot2 from "../../Images/instructions2.jpeg";
import screenshot3 from "../../Images/instructions3.jpeg";
import screenshot4 from "../../Images/instructions4.jpeg";

// carousel
import Card from "../Carousel/Card";
import CircleButton from "../Carousel/CircleButton";






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
        div {
            justify-content: center;
            gap: ${theme.padding.double};
            max-width: ${theme.media.phone};
        }

        img {
            max-width: ${theme.media.tablet};
        }
    }`;

const StyledServiceContainer = styled.div`
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

const StyledInstructionContainer = styled.div`
    padding: ${theme.padding.standard};
    width:100%;
    background-color: ${theme.color.primary};
    display: flex;
    flex-direction: column;
    gap: ${theme.padding.double};

    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${theme.padding.standard};

        p {
            font-size: ${theme.fontSize.medium};
            line-height: ${theme.lineHeight.medium};
            text-align: center;
            color: ${theme.color.light};

            span {
                color: ${theme.color.secondary};
            }
        }

        img {
            height: 500px;
        }

        @media (min-width: ${theme.media.phone}) {
            width: 350px;
            height: 600px;
            justify-content: space-between;
        }
    }

    @media (min-width: ${theme.media.phone}) {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }
`;

const StyledReviewsContainer = styled.div`
    width: 100%;
    background-color: ${theme.color.tertiary};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.padding.double};
    gap: ${theme.padding.double};

    div {
        width: 100%;
        display: flex;
        justify-content: center;
    }  
`;

const Home = () => {
    const [carouselImage, setCarouselImage] = useState(0);
    // const carouselImageToggle = () => {
    //     carouselImage === 2
    //         ? setCarouselImage(0)
    //         : setCarouselImage(carouselImage + 1)
    // };
    const firstImageToggle = () => setCarouselImage(0);
    const secondImageToggle = () => setCarouselImage(1);
    const thirdImageToggle = () => setCarouselImage(2);

    return (
        <>
            <StyledLinkContainer>
                <div>
                    <h1>La Nurserie</h1>
                    <p>A bit of help and a lot of love</p>
                </div>
                <img src={Banner} alt="Banner" />
            </StyledLinkContainer>
            <StyledServiceContainer>
                <h2>Our Services</h2>
                <img src={Girls} alt="girls" />
                <h1>Find A Babysitter</h1>
                <p>Do you need a Babysitter for now?</p>
                <p>Follow the instruction below!</p>
            </StyledServiceContainer>
            <StyledInstructionContainer>
                <div>
                    <p><span>1)</span> Send <span>"Join division-agree"</span> to <span>+1 (415) 523-8886</span> from your WhatsApp number.</p>
                    <img src={screenshot1} alt="first instruction" />
                </div>
                <div>
                    <p><span>2)</span> Ask for a babysitter!</p>
                    <img src={screenshot2} alt="second instruction" />
                </div>
                <div>
                    <p><span>3)</span> La Nurserie will ask your location:</p>
                    <img src={screenshot3} alt="third instruction" />
                </div>
                <div>
                    <p><span>4)</span> Confirm your location with <span>Yes</span> and receive the contacts from your assigned Babysitter!</p>
                    <img src={screenshot4} alt="fourth instruction" />
                </div>
            </StyledInstructionContainer>
            <StyledReviewsContainer>
                <Card imageNumber={carouselImage} />
                <div>
                    <CircleButton action={firstImageToggle} actionTwo={secondImageToggle} actionThree={thirdImageToggle} isActive={carouselImage} />
                </div>
            </StyledReviewsContainer>
        </>
    )
}

export default Home;
