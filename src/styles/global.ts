import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --background: #121214;
        --header-bar:#202024;

    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media(max-width:1080px){
            font-size: 93.75%;
        }
        @media(max-width:720px){
            font-size: 87.5%;
        }
    }

    body{
        background:white;
        -webkit-font-smoothing: antialiased;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        cursor: not-allowed;
        opacity: 0.6;
    }

`;

export default GlobalStyle;
