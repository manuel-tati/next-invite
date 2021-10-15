import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle `

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Roboto Condensed', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #F6F6F6;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }

`;