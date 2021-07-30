import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Pdf from "../documents/resume.pdf";

function Sidebar2({ isOpen, toggle }) {
  return (
    <SidebarContainerStyled isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapperStyled>
        <SidebarMenuStyled>
          <SideBarLogoStyled to="/">
            <div className="avatar">
              <img
                src="https://avatars.githubusercontent.com/u/26722249?v=4"
                alt=""
              />
            </div>
          </SideBarLogoStyled>
          <SidebarLinkStyled to="/about" onClick={toggle}>
            About
          </SidebarLinkStyled>
          <SidebarLinkStyled to="/resume" onClick={toggle}>
            Experience
          </SidebarLinkStyled>
          <SidebarLinkStyled to="/projects" onClick={toggle}>
            Projects
          </SidebarLinkStyled>
          <SidebarLinkStyled to="/contact" onClick={toggle}>
            Contact
          </SidebarLinkStyled>
        </SidebarMenuStyled>
        <SidebarBtnWrapStyled>
          <a href={Pdf} target="_blank" rel="noreferrer">
            <SidebarBtnLink>Resume</SidebarBtnLink>
          </a>
        </SidebarBtnWrapStyled>
      </SidebarWrapperStyled>
    </SidebarContainerStyled>
  );
}

const SidebarContainerStyled = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100vh;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SidebarWrapperStyled = styled.div`
  color: #fff;
`;

const SidebarMenuStyled = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

const SideBarLogoStyled = styled(Link)`
  cursor: pointer;
  font-size: 1.8rem;
  display: flex;
  align-items: center;

  font-weight: bold;
  text-decoration: none;

  .avatar {
    width: 100%;

    padding: 1rem 0;
    img {
      height: 60px;
      border-radius: 50%;
    }
  }
`;

const SidebarLinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: var(--primary-color);
  }
`;

const SidebarBtnLink = styled.div`
  border-radius: 10px;
  background: var(--primary-color);
  white-space: nowrap;
  padding: 16px 64px;
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

const SidebarBtnWrapStyled = styled.div`
  display: flex;
  justify-content: center;
`;
export default Sidebar2;
