import React from "react";
import styled from "styled-components";

function Title({ title, span }) {
  return (
    <TitleStyled>
      <h2> {title} </h2>{" "}
    </TitleStyled>
  );
}

const TitleStyled = styled.div`
  position: relative;
  h2 {
    color: var(--white-color);
    font-size: 3rem;
    font-weight: 600;

    position: relative;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 12rem;
      height: 0.33rem;
      background-color: var(--border-color);
      border-radius: 15px;
      left: 0;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 6rem;
      height: 0.33rem;
      background-color: var(--primary-color);
      border-radius: 15px;
      left: 0;
    }
  }
`;

export default Title;
