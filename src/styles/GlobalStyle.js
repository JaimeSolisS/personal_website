import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
:root {
    --background-dark-color: #02102c;  
    --font-light-color: #C8D4FA; 
    --sidebar-dark-color: #042557;
    --border-color: #136fad;
    --primary-color: #029ffa; 
    --white-color: #FFF;
    --background-light-color-2: #042557; 
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

body::-webkit-scrollbar{
    width: 9px; 
    background-color: #383838;
}

body::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #6b6b6b;
}

body::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #383838;
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

//Nav Toggler
.menu{
      position: absolute;
      right: 5%;
      top: 3%; 
      display: none;
      z-index: 15;
      svg{
          font-size: 3rem;
      }
    }
    .nav-toggle{
        transform: translateX(0);
        z-index: 20;
    }
  @media screen and (max-width:1200px){
    .menu{
        display: block;
    }
  }

`;

export default GlobalStyle;