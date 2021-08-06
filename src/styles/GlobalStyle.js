import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --background-dark-color: #0a192f; 
    --sidebar-dark-color: #0b1a43; 
    --primary-color: #16b8f3; 
    --background-light-color-2: #042557; 
    --border-color: #0b5ea2;
    --font-light-color: #ccd6f6; 
    --white-color: #e6f1ff;
    
}
* {
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1rem;
}

body {
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
    transition: all .4s ease-in-out;
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
        @media screen and (max-width: 768px){
        font-size: 2rem
    }
    }

    span{
        color: var(--primary-color)
    }

    h2{
        font-size: 2rem;
        color: var(--white-color);
        span{
            font-size: 4rem;
        }
        @media screen and (max-width: 502px){
        font-size: 3rem
    }
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
