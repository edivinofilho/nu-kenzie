import { useState } from "react"
import { GlobalReset } from "./styles/GlobalReset"
import { GlobalRoot } from "./styles/GlobalStyles"
import { StyledMainContainer } from "./styles/Container"
import { FormWrapper } from "./components/Form/style"
import { TotalAmountWrapper } from "./components/TotalAmount/style"

import { Header } from "./components/Header"
import { Form }  from "./components/Form"
import { List } from "./components/List"
import { TotalAmount } from "./components/TotalAmount"

const App = () => {
  const [transactions, setTransactions] = useState([])
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    entryType: ""
  })

  const handleFormSubmit = (event) => {
    event.preventDefault()    
  }  
  return (
    <>
      <GlobalReset />
      <GlobalRoot />

      <Header />
      <StyledMainContainer>
        <FormWrapper>
          <Form formData={formData}
            setFormData={setFormData}
            formTransactions={transactions} 
            formSetTransactions={setTransactions} 
            onSubmit={handleFormSubmit}
          />
          <TotalAmountWrapper>
            {transactions.length > 0 && <TotalAmount transactions={transactions}/>}
          </TotalAmountWrapper>
        </FormWrapper> 

        <List 
        transactions={transactions}
        setTransactions={setTransactions}/>
          
      </StyledMainContainer>
    </>
  )
}

export default App