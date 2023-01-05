import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: "Helvetica";
        background: hsla(110, 78%, 59%, 1);

background: radial-gradient(circle, hsla(110, 78%, 59%, 1) 0%, hsla(174, 76%, 38%, 1) 100%);

background: -moz-radial-gradient(circle, hsla(110, 78%, 59%, 1) 0%, hsla(174, 76%, 38%, 1) 100%);

background: -webkit-radial-gradient(circle, hsla(110, 78%, 59%, 1) 0%, hsla(174, 76%, 38%, 1) 100%);

filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#61E846", endColorstr="#17AB9C", GradientType=1 );
    }
    * {
        box-sizing: border-box;
    },
    ul {
        padding: 0;
    }
`;

export default GlobalStyles;
