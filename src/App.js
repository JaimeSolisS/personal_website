import React from "react";
import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import MenuIcon from "@material-ui/icons/Menu";
import { Route, Switch } from "react-router";
import { IconButton } from "@material-ui/core";
import { useState, useEffect } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import Loader from "./Components/Loader";
import Navbar from "./Components/Navbar";
import Sidebar2 from "./Components/Sidebar2";

function App() {
  const [navToggle, setNavToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <div>
          {/* <Sidebar navToggle={navToggle} /> */}
          <Sidebar2 isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />

          <div className="menu">
            {/*
            <IconButton onClick={() => setNavToggle(!navToggle)}>
              <MenuIcon />
            </IconButton>
            */}
          </div>
          <MainContentStyled>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/about" exact>
                <About />
              </Route>
              <Route path="/resume" exact>
                <Resume />
              </Route>
              <Route path="/projects" exact>
                <Projects />
              </Route>
              <Route path="/contact" exact>
                <Contact />
              </Route>
            </Switch>
          </MainContentStyled>
        </div>
      )}
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 5rem;
  margin-right: 5rem;
  min-height: 90vh;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
  .lines {
    position: absolute;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;
