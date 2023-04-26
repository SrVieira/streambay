import styled, { css } from 'styled-components';

export const MenuContainer = styled.ul`
    display: inline-flex;
    list-style-type: none;
    li {
        
    }
`;

export const MenuItem = styled.li<{ isActive?: boolean }>`
    margin-right: 48px;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    a {
        text-decoration: none;
        color: #fff;
    }
    &:after {
        width: 0;
        content: "";
        display: block;
        height: 2px;
        margin-top: 2px;
        background: #fff;
        transition: width 0.65s;
    }
    &:hover, &:focus {
        &:after {
            width: 100%;
        }
    }
    ${(props) => props.isActive && css`
        &:after {
            width: 100%;
        }
    `}
`;