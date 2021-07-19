import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --background-dark-color: #10121A;  
    --font-light-color: #6a78a6; 
    --sidebar-dark-color: #06113d;
    --border-color: #1332AD;
    --primary-color: #0234FA; 
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
}
`; 

export default GlobalStyle;