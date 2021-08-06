import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import Pdf from "../documents/resume.pdf";
import Logo from "../img/logo.png";

function Footer({ toggle }) {
  return (
    <FooterStyled>
      <p>
        ©<a href="https://github.com/JaimeSolisS"> Jaime Solis </a>
        {new Date().getFullYear()}
      </p>
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
  p {
    font-size: 0.7rem;
  }
  a {
    font-size: 0.7rem;
  }

  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
`;

export default Footer;
