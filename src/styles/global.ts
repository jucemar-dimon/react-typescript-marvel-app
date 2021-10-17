import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --background: #151515;
        --marvel-header-nav:#202020;
        --marvel-text-color:#151515;
        --body-font-color:#ffffff;
        --marvel-red:#EC1D24;
        --marvel-border:#393939;
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
        background-image:  url("fundo.jpg");
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: top;
        background-size: cover;
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea,button{
        font-family: 'Roboto',sans-serif;
        font-weight: 400;
    }

    h1,h2,h3,h4,h5,h6,strong{
        font-weight: 600;
    }


    button{
        cursor: pointer;
    }

    [disabled]{
        cursor: not-allowed;
        filter: saturate(50%);
        color: var(--body-font-color);



    }

`;

export default GlobalStyle;
