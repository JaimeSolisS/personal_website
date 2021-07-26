import React from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import Pdf from "../documents/resume.pdf";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <h4>
          I am <span>Jaime Solis</span>
        </h4>

        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus dignissimos dolorem quis quia quod fugiat ipsa
          pariatur, veniam ex, expedita maxime dolor nobis ullam nam debitis
          nesciunt vel sunt dicta.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
          </div>
          <div className="info">
            <p>Jaime Solis</p>
            <p>24</p>
            <p>Lorem</p>
            <p>Lorem, Ipsum</p>
            <p>Lorem</p>
          </div>
        </div>
        <a href={Pdf} target="_blank" rel="noreferrer">
          <PrimaryButton title={"Resume"} />
        </a>
      </div>
      <div className="right-content">
        <img
          src="https://avatars.githubusercontent.com/u/26722249?v=4"
          alt=""
        />
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  display: flex;
  margin-top: 5rem;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 500;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
  .right-content {
    width: 100%;
    img {
      width: 95%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default ImageSection;
