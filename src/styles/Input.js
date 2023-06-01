import styled, { css } from "styled-components"

export const InputDefaultLabels = css`
  font-family: 'Inter', sans-serif;
  font-size: .75rem;
  font-weight: 400;
  line-height: 1.375rem;
`

export const StyledLabels = styled.label`
  ${InputDefaultLabels}

  color: var(	--ColorGrey5);
`

export const StyledInputs = styled.input`
  width: 100%;
  height: 3rem;

  ${InputDefaultLabels}

  background: var(--ColorGrey1);

  border-radius: 8px;

  padding: .9375rem;
  ` 

