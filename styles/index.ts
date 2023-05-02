import styled, { css } from 'styled-components';

export const CarouselWrapper = styled.div<{ first?: boolean }>`
    ${(props) => props.first && css`
        margin-top: -66px;
    `}
`;