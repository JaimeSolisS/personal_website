import React from "react";
import Particle from "../Components/Particle";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <HomeStyled>
      <div className="p-particles-js">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi, I'm <span>Jaime Solis</span>
        </h1>
        <p>I work with data.</p>
        <div className="icons">
          <a
            href="https://google.com"
            className="icon i-facebook"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faAddressCard} />
          </a>
          <a
            href="https://google.com"
            className="icon i-github"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubIcon />
          </a>
          <a
            href="https://google.com"
            className="icon i-linkedin"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </HomeStyled>
  );
}

const HomeStyled = styled.header`
  width: 100%;
  height: 90vh;
  position: relative;

  .p-particles-js {
    position: absolute;
    top: -80px;
    left: -5rem;
    right: -5rem;
    height: 100vh;
  }

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }
    }
  }
`;
export default Home;
