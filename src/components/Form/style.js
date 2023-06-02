import styled from "styled-components"

export const FormWrapper = styled.div`
  width: 100%;
  height: auto;

  margin-top: 5.5rem;

  @media (min-width: 765px) {
  width: 35%;
  }
`
export const StyleForm = styled.form`
  width: 100%;
  height: 23rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .5rem;

  margin: 0 auto;
  margin-top: 1.5rem;

  padding: 1.25rem;
  
  border: .125rem solid var(--ColorGrey2);

  box-sizing: border-box;

  @media (min-width: 765px) {
    width: 100%;
    
  }
`

export const StyledSelect = styled.select`
  width: 100%;
  height: 3rem;

  background: var(--ColorGrey1);

  border-radius: .5rem;
  border: none;

  padding: 10px;

  font-family: 'Inter', sans-serif;
  font-size: .75rem;
  font-weight: 400;
  line-height: 1.375rem;
`
export const StyledSpan = styled.span`
  font-size: .75rem;
  color: var( --ColorGrey3);
`