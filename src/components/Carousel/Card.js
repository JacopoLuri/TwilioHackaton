import { React, useContext, useState } from "react";
import { theme } from "../../data/theme";
import styled from 'styled-components';
import { Context } from "../../context/Context";

//  images
import firstPortrait from "../../Images/customer1.png";
import secondPortrait from "../../Images/costumer2.png";
import thirdPortrait from "../../Images/costumer3.png";

// icons
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

const StyledCard = styled.div`
    width: 100%;
    height: 330px;
    border-radius: ${theme.borderRadius.small};
    display: flex;
    flex-direction: column;
    gap: ${theme.padding.standard};
    align-items: center;
    padding: ${theme.padding.standard};
    background-color: ${theme.color.light};

    img {
        width: 125px;
        border-radius: ${theme.borderRadius.circle};
        border: ${theme.borderWidth.medium} solid ${theme.color.primary};
        padding: ${theme.padding.small};
    }

    h2 {
        font-size: ${theme.fontSize.medium};
        line-height: ${theme.lineHeight.medium};
        text-align: center;
        margin-top: ${theme.padding.double};
    }

    p {
        font-size: ${theme.fontSize.medium};
        line-height: ${theme.lineHeight.medium};
        text-align: center;
    }

    svg {
        color: ${theme.color.tertiary};
        width: 24px;
        height: 24px;
        margin-left: ${theme.margin.small};
    }

    @media (min-width: ${theme.media.phone}) {
        max-width: ${theme.media.phone};
    }
`;

const Card = ({ imageNumber }) => {
    const context = useContext(Context);

    return (
        <StyledCard>
            {
                imageNumber === 0
                    ? (<>
                            <img src={firstPortrait} alt="Reviewer" />
                            <h2>Angelina J.</h2>
                            <p>"Amazing service, my babysitter is an incredible person, my kids love her so much and she also teach them french!"</p>
                            <div>
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </div>
                        </>)
                    : imageNumber === 1
                        ? (<>
                            <img src={secondPortrait} alt="Reviewer number 2" />
                            <h2>Anna M.</h2>
                            <p>"This service saves my life, I was about to quit my job, recommended to every parent in need of a qualified babysitter."</p>
                            <div>
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                            </div>
                        </>)
                        : (<>
                            <img src={thirdPortrait} alt="Reviewer umber 3" />
                            <h2>Stephen K.</h2>
                            <p>"Good Job! Good service! My babysitter is really patient and very funny! Recommended!"</p>
                            <div>
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStar />
                            </div>
                        </>)
            }
        </StyledCard>

    )
}

export default Card;