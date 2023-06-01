import { Card } from "./Cards"

import { StyledListContainer, StyledTitle, StyledMsg, StyledList } from "../List/style"

export const List = ( {transactions, setTransactions} ) => {
  
  return (
    <StyledListContainer>
     
      <StyledTitle>Resumo Financeiro</StyledTitle>
      
      {transactions.length === 0 ? (
        <StyledMsg>Você ainda não possui nenhum lançamento</StyledMsg>
        ) : (
        <StyledList>
          {transactions.map((transaction) => (
            <Card key={transaction.id}
              transactions={transactions}
              setTransactions={setTransactions}
              id={transaction.id}
              description={transaction.description}
              amount={transaction.amount}
              entryType={transaction.entryType}
            />
          ))}
        </StyledList>
    )}
      
    </StyledListContainer>
  )
}