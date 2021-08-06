import React from "react";
import styled from "styled-components";
import Footer from "../Components/Footer";
import ImageSection from "../Components/ImageSection";
import Title from "../Components/Title";
import { MainLayout } from "../styles/Layouts";

function About() {
  return (
    <>
      <MainLayout>
        <AboutStyled>
          <Title title={"About Me"} />
          <ImageSection />
        </AboutStyled>
      </MainLayout>
      <Footer />
    </>
  );
}

const AboutStyled = styled.div``;

export default About;
