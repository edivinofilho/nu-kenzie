import styled from "styled-components"

export const StyledListContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  margin: 0 auto;
  padding-top: 20px;

  @media (min-width: 765px) {
    width: 60%;
    margin: 5.5rem auto;
  }
`

export const StyledList = styled.ul`
  width:100%;
`

export const StyledTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
`

export const StyledMsg = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
`