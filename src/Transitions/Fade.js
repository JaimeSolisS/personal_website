import transition from "styled-transition-group";

export default transition.div `
  width: 100%;
  position: absolute; 

  &:enter {
    opacity: 0;
    z-index: 1;
  }
  &:enter-active {
    opacity: 1;
    transition: opacity ${(props) => props.timeout}ms linear ${(props) =>
  props.timeout / 2}ms;
  }
  
  &:exit {
    opacity: 1;
  }
  &:exit-active {
    opacity: 0;
    transition: opacity ${(props) => props.timeout / 2}ms linear;
  }
  
`;