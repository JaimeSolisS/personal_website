import React from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import Pdf from "../documents/resume.pdf";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <p className="paragraph">
          Hello! My name is Jaime and I enjoy translating data into valuable
          information. My journey in data science began when in 2019 when I
          enrolled in a Big data, Data Analytics, and Data Science program at my
          university. In this program, I had the opportunity of working with{" "}
          <a href="https://www.cemexmexico.com/" target="_blank">
            <span>
              a global leader company in the building materials industry
            </span>
          </a>
          . I also learned a lot about Python, Pandas, Scikit-learn, and
          Tableau!
        </p>
        <p>
          I'm currently an Engineer at{" "}
          <a href="https://pkglobal.com/" target="_blank">
            <span>PK</span>{" "}
          </a>
          building big data solutions for big companies. I recently graduated
          from <span>Tec de Monterrey</span> with Data Science and Advanced
          Analytics Concentrations.
        </p>
        <br />

        <p>
          <span>When I'm not in front of a computer screen</span>, I'm probably
          watching movies and series, reading a book, listening to records, or
          traveling.
        </p>
        <br />
        <p>Here are a few technologies I've been working with recently:</p>
        <br />
        <ul>
          <li>Scala</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>Spark</li>
          <li>Streamlit</li>
          <li>React</li>
        </ul>
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
    margin-left: 30px;
    img {
      width: 95%;
      height: 100%;
      object-fit: cover;
    }
  }

  ul {
    -webkit-columns: 2;
    -moz-columns: 2;
    columns: 2;
    list-style-position: inside;
  }
  li {
    list-style-type: none;
  }

  li::before {
    content: "▶︎ ";
    color: var(--primary-color);
    padding-right: 1rem;
  }
`;

export default ImageSection;
