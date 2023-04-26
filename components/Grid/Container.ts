import styled from 'styled-components';

const Container = styled.div`
    max-width: 1400px;
    padding-left: 15px;
    padding-right: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    &:before,
    &:after {
        content: "";
        display: table;
    }
    &:after {
        clear: both;
    }
`;

export default Container;
