import React from "react";
import { theme } from "../../data/theme";
import styled from 'styled-components';

const StyledCircleButtonsContainer = styled.div`
    display: flex;
    gap: ${theme.padding.double};
`;

const StyledCircleButton = styled.button`
    border: ${theme.borderWidth.medium} solid ${theme.color.secondary};
    border-radius: ${theme.borderRadius.circle};
    width: 16px;
    height: 16px;
    background-color: ${({ isActive }) => isActive === 0
        ? `${theme.color.light}`
        : `${theme.color.secondary}`
    };
    transition: all 500ms;
    
    &:hover {
        cursor: pointer;
        opacity: 0.75;
    }      
`;

const StyledCircleButtonTwo = styled.button`
    border: ${theme.borderWidth.medium} solid ${theme.color.secondary};
    border-radius: ${theme.borderRadius.circle};
    width: 16px;
    height: 16px;
    background-color: ${({ isActive }) => isActive === 1
        ? `${theme.color.light}`
        : `${theme.color.secondary}`
    };
    transition: all 500ms;
    
    &:hover {
        cursor: pointer;
        opacity: 0.75;
    }      
`;

const StyledCircleButtonThree = styled.button`
    border: ${theme.borderWidth.medium} solid ${theme.color.secondary};
    border-radius: ${theme.borderRadius.circle};
    width: 16px;
    height: 16px;
    background-color: ${({ isActive }) => isActive === 2
        ? `${theme.color.light}`
        : `${theme.color.secondary}`
    };
    transition: all 500ms;
    
    &:hover {
        cursor: pointer;
        opacity: 0.75;
    }      
`;

const CircleButton = ({ action, actionTwo, actionThree, isActive }) => (
    <StyledCircleButtonsContainer>
        <StyledCircleButton onClick={action} isActive={isActive} />
        <StyledCircleButtonTwo onClick={actionTwo} isActive={isActive} />
        <StyledCircleButtonThree onClick={actionThree} isActive={isActive} />
    </StyledCircleButtonsContainer>
)

export default CircleButton;