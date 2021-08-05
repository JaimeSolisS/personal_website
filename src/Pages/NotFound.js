import React from "react";
import Cat from "../Components/Cat";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
function NotFound() {
  let history = useHistory();

  return (
    <NotFoundStyled>
      <div className="p-particles-js">
        <Cat />
        <div className="cat">
          <img src="https://vincentgarreau.com/particles.js/assets/img/kbLd9vb_new.gif" />
        </div>
      </div>
      <div className="typography">
        <h1>404</h1>
        <h1>
          <span>Oops, you're lost in space</span>
        </h1>
        <h2>But you have found Nyan Cat, directly from 2011:)</h2>
        <div className="buttons">
          <btn className="button" onClick={() => history.goBack()}>
            Go Back
          </btn>
          <NavLink to="/" className="button">
            Go Home
          </NavLink>
        </div>
      </div>
    </NotFoundStyled>
  );
}

const NotFoundStyled = styled.header`
  width: 100%;
  height: 90vh;
  position: relative;

  .cat {
    top: 25%;
    position: absolute;

    img {
      width: 50%;
    }
  }

  .p-particles-js {
    position: absolute;
    top: -80px;
    left: -5rem;
    right: -5rem;
    height: 100vh;
  }

  .typography {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .buttons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .button {
        margin: 10px;
        border-radius: 10px;
        background: var(--primary-color);
        white-space: nowrap;
        padding: 10px 22px;
        color: white;
        font-size: 16px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;

        &:hover {
          transition: all 0.2s ease-in-out;
          background: #fff;
          color: #010606;
        }
      }
    }
  }
`;

export default NotFound;
