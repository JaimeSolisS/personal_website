import React from 'react';
import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import Home from "./Pages/Home"
import About from "./Pages/About"
import Resume from "./Pages/Resume"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"
import MenuIcon from "@material-ui/icons/Menu";
import {Route, Switch} from "react-router"; 
import { IconButton } from '@material-ui/core';
import { useState } from "react";

function App() {

  const [navToggle, setNavToggle] = useState(false);

  return (
    <div className="App">
      <Sidebar navToggle={navToggle} />

      <div className="menu">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon/>
        </IconButton>
      </div>

      <MainContentStyled> 
       <Switch>
         <Route path="/" exact>
          <Home/>
         </Route>
         <Route path="/about" exact>
          <About/>
         </Route>
         <Route path="/resume" exact>
          <Resume/>
         </Route>
         <Route path="/projects" exact>
          <Projects/>
         </Route>
         <Route path="/contact" exact>
          <Contact/>
         </Route>
       </Switch>
     
      
      </MainContentStyled>

    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width:1200px){
   margin-left: 0;
}
  .lines {
    position: absolute;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }


  }
`;

export default App;
