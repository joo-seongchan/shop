import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainstyle = {};

export const GlobalStyle = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
}
body{
    letter-spacing: -1px;
    font-family: 'Noto Sans KR', sans-serif;
}
a{
    text-decoration: none;
    color: black;
}
`;
