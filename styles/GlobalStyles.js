import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: "Roboto";
        font-weight: bold;
    }
    * {
        box-sizing: border-box;
    },
    ul {
        padding: 0;
    }
`;

export default GlobalStyles;
