import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-size: 100%;
        font-family: 'Rubik', sans-serif;
        line-height: 1.5em;
        background: #0E0E0E;
    }
`;
