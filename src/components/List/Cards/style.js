import styled from "styled-components"

export const StyledCardContainer = styled.li`
  width: 100%;
  height: 8.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  
  margin: 0rem auto .625rem auto;

  padding: 0 10px;
  
  border-radius: 4px;
  border-left: ${props => props.entryType === 'Entrada' ? '4px solid var(--ColorColorSecondary)' : '4px solid var(--ColorGrey2)'};

  background: var(--ColorGrey1);
`

export const StyledCardHeader = styled.h3`
  font-size: 1rem;
  font-weight: 700;
`

export const StyledText = styled.p`
  font-size: .75rem;
  font-weight: 400;
  color: var(--Colorgrey1);
`

export const StyledContainer = styled.div`
  width: 100%;
  height: 40%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`

export const StyledCardButton = styled.button`
  font-size: .68rem;

  width: 3rem;
  height: 1.1875rem;

  border-radius: 2px;

  background: var(--ColorGrey2);
`