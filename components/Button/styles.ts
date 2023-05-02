import styled from 'styled-components';

export const StyledButton = styled.button<{ variant?: string }>`
    border: 0;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    padding: 12px 0;
    text-align: center;
    border-radius: 30px;
    max-width: 100%;
    color: ${(props) => props.variant == "primary" ? "#FFF" : "#141414"};
    background-color: ${(props) => props.variant == "primary" ? "#4200FF" : "#FFF"};
    transition: background-color 0.65s;
    cursor: pointer;
    &:hover, &:focus {
        background-color: ${(props) => props.variant == "primary" ? "#24008d" : "#e5e5e5"};
    }
`;
