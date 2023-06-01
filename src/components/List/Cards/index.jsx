import { StyledCardContainer, StyledCardHeader, StyledText, StyledContainer, StyledCardButton } from "./style"

export const Card = ( { id, description, amount, entryType, setTransactions, transactions } ) => {

  const removeTransaction = (transactionId)=> {
    const newTransactions = transactions.filter(transactions => transactions.id !== transactionId)

    setTransactions(newTransactions)
  }

  const transactionAmount = parseInt(amount)

  return (
    <>  
      <StyledCardContainer entryType={entryType}>
        <StyledContainer>
          <StyledCardHeader>{description}</StyledCardHeader>
          <StyledText>{entryType}</StyledText>
        </StyledContainer>
        <StyledContainer>
          <StyledText>{transactionAmount.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</StyledText>
          <StyledCardButton type="submit" onClick={() => removeTransaction(id)}>Excluir</StyledCardButton>
        </StyledContainer>
      </StyledCardContainer>
    </>
  )
}