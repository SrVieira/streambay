import styled from 'styled-components';

const getWidthGrid = (value) => {
    if (!value) return;

    const width = value / 12 * 100;
    return `width: ${width}%`;
};

const Col = styled.div`
    float: left;
    padding: .25rem;
    min-height: 1px;
    box-sizing: border-box;

    @media only screen and (max-width: 767px) {
        ${({ sm }) => sm && getWidthGrid(sm)};
    }

    @media only screen and (min-width: 768px) and (max-width: 999px) {
        ${({ md }) => md && getWidthGrid(md)};
    }

    @media only screen and (max-width: 1000px) {
        ${({ lg }) => lg && getWidthGrid(lg)};
    }
`;

export default Col;
