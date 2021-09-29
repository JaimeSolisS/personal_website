import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import Pdf from "../documents/resume.pdf";
import Logo from "../img/logo.svg";

function Navbar({ toggle }) {
  return (
    <NavStyled>
      <NavbarContainerStyled>
        <NavLogoStyled to="/">
          <div className="avatar">
            <img src={Logo} alt="" />
          </div>
        </NavLogoStyled>
        <MobileIconStyled onClick={toggle}>
          <FaBars />
        </MobileIconStyled>
        <NavMenuStyled>
          <NavItemStyled>
            <NavLinksStyled to="/about">About</NavLinksStyled>
          </NavItemStyled>
          <NavItemStyled>
            <NavLinksStyled to="/resume">Experience</NavLinksStyled>
          </NavItemStyled>
          <NavItemStyled>
            <NavLinksStyled to="/projects">Projects</NavLinksStyled>
          </NavItemStyled>
          <NavItemStyled>
            <NavLinksStyled to="/contact">Contact</NavLinksStyled>
          </NavItemStyled>
        </NavMenuStyled>
        <NavBtnStyled>
          <a href={Pdf} target="_blank" rel="noreferrer">
            <NavBtnLink>Resume</NavBtnLink>
          </a>
        </NavBtnStyled>
      </NavbarContainerStyled>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  background: var(--background-dark-color);
  height: 80px;
  //margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0ms.8s all ease;
  }
`;

const NavbarContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
`;

const NavLogoStyled = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  .avatar {
    width: 100%;

    padding: 1rem 0;
    img {
      height: 60px;
      border-radius: 50%;
      border: #e6f1ff solid 0.1px;
    }
  }
`;

const MobileIconStyled = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--primary-color);
  }
  svg {
    font-size: 1.8rem;
  }
`;

const NavMenuStyled = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItemStyled = styled.li`
  height: 80px;

  p {
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
      border-bottom: 3px solid #16b8f3;
    }
  }
`;

const NavLinksStyled = styled(NavLink)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid var(--primary-color);
  }
`;

const NavBtnStyled = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtnLink = styled.div`
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
`;
export default Navbar;
