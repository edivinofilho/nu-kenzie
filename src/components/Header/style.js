import styled from "styled-components";

export const StyleHeader = styled.header`
  width: 100%;
  height: 5.5rem;

  box-shadow:  0px 2px 10px 3px rgba(0, 0, 0, 0.09);

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  padding-left: .625rem;

  box-sizing: border-box;

  @media (min-width: 1020px){
    width: 100%;
  }
`