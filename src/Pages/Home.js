import React from "react";
import Particle from "../Components/Particle";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import Pdf from "../documents/resume.pdf";

function Home() {
  return (
    <HomeStyled>
      <div className="p-particles-js">
        <Particle />
      </div>
      <div className="typography">
        <div className="hello">
          <h2>Hi, my name is</h2>
        </div>
        <br />
        <div className="name">
          <h1>
            <span>Jaime Solis.</span>
          </h1>
        </div>
        <br />
        <p>
          I'm a software engineer focused on machine learning and data
          visualization. Currently, I'm building Big Data solutions at{" "}
          <a href="https://pkglobal.com/" target="_blank">
            <span>PK</span>.
          </a>
        </p>
        <div className="icons">
          <a
            href={Pdf}
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faAddressCard} />
          </a>

          <a
            href="https://github.com/JaimeSolisS"
            className="icon i-github"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/jaimesoliss/"
            className="icon i-linkedin"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a
            href="mailto:hi@jaimesolis.dev"
            className="icon i-linkedin"
            rel="noopener noreferrer"
            target="_blank"
          >
            <MailIcon />
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
    //text-align: center;
    width: 50%;

    @media screen and (max-width: 768px) {
      width: 100%;

      p {
        font-size: 0.8rem;
      }
    }

    .hello {
      text-align: left;
    }

    .name {
      text-align: center;
    }

    .description {
      text-align: left;
    }

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
