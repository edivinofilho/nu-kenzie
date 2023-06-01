import { StyleTotalAmountContainer, StyleAmountContainer, StyledAmount, StyledMsgBalance } from "./style"

export const TotalAmount = ({transactions}) => {
  
  const totalAmount = transactions.reduce((acc, curr) => {
    const transactionAmount = parseInt(curr.amount, 10)
    if(curr.entryType === "Entrada"){
      return acc + transactionAmount
    } else if (curr.entryType === 'Despesa'){
      return acc - transactionAmount
    }
    return acc
  }, 0)

  return (
    <StyleTotalAmountContainer>
        <StyleAmountContainer>
          <h3>Valor total: </h3>
          <StyledAmount 
          transactions={totalAmount}
          >{totalAmount.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</StyledAmount>
        </StyleAmountContainer>
        <StyledMsgBalance>O valor se refere ao saldo</StyledMsgBalance>
    </StyleTotalAmountContainer>
  )
}