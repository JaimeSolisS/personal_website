import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --background-dark-color: #02102c;  
    --font-light-color: #C8D4FA; 
    --sidebar-dark-color: #042557;
    --border-color: #136fad;
    --primary-color: #029ffa; 
    --white-color: #FFF;
}
* {
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.2rem;
}

body {
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
}

a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;
    font-size: 1rem;
}

h1{
        font-size: 4rem;
        color: var(--white-color);
        span{
            font-size: 4rem;

        }
    }

    span{
        color: var(--primary-color)
    }
`; 

export default GlobalStyle;