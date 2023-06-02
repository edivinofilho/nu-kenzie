import styled from "styled-components"

export const TotalAmountWrapper = styled.div`
  width: 100%;

  @media (min-width: 765px) {
    width: 100%;
  }
`

export const StyleTotalAmountContainer = styled.div`
  width: 100%;
  height: 5.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  margin: .3125rem auto;
  padding: 1rem;
      
  border: 2px solid var(--ColorGrey2);

  box-sizing: border-box;

  h3 {
    font-size: 1rem;
    font-weight: 700;
  }

  @media (min-width: 765px) {
    width: 100%;
    
  }
`

export const StyleAmountContainer = styled.span`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const StyledAmount = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: var(--ColorColorPrimary);
`
export const StyledMsgBalance = styled.p`
  font-size: .75rem;
`