import React from 'react';
import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import Home from "./Pages/Home"

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <MainContentStyled>
       
      <Home/>
      
      </MainContentStyled>

    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
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
