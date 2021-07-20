import React from 'react';
import Particle from '../Components/Particle';
import styled from 'styled-components'

function Home() {
    return (
        <HomeStyled>
            <div className="p-particles-js">
                <Particle/>
            </div>
        </HomeStyled>
    );
}

const HomeStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

`;
export default Home;