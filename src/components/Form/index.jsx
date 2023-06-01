import { StyleForm, StyledSelect, StyledSpan } from "./style"
import { StyledInputs, StyledLabels } from "../../styles/input"
import { StyledFormButton } from "../../styles/FormButton"

import { v4 as uuidv4 } from "uuid"

export const Form = ({ formData, setFormData, formTransactions, formSetTransactions }) => {
  const { description, amount, entryType } = formData;

  const handleEntryTypeChange = (event) => {
    setFormData({ ...formData, entryType: event.target.value })
  }
 
  const addTransaction = (transaction) => {
    formSetTransactions([...formTransactions, transaction])
  }

  const submit = (event) => {
    event.preventDefault()

    const transactionId = uuidv4();

    const newTransaction = {
      id: transactionId,
      description: description,
      amount: amount,
      entryType: entryType
    };

    addTransaction(newTransaction)
    
    setFormData({
      id:"",
      description: "",
      amount: "",
      entryType: ""
    })
  }
 
  return (
    <StyleForm onSubmit={submit}>
        <StyledLabels htmlFor="descricao">Descrição</StyledLabels>
        <StyledInputs type="text" placeholder="Digite aqui sua descrição" name="descricao" value={description} onChange={(e) => setFormData({...formData, description: e.target.value})} required/>
        <StyledSpan>Ex: Compra de roupas</StyledSpan>

        <StyledLabels htmlFor="valor"> Valor (R$)</StyledLabels>
        <StyledInputs type="number" placeholder="1" name="valor" value={amount} onChange={(e) => setFormData({...formData, amount: e.target.value})} required/>

        <StyledLabels htmlFor="select">Tipo de valor</StyledLabels>
        <StyledSelect name="select" id="select" value={entryType} onChange={handleEntryTypeChange}>
          <option value="">Selecione</option>
          <option value="Entrada">Entrada</option>
          <option value="Despesa">Despesa</option>

        </StyledSelect>

        <StyledFormButton type="submit">Inserir Valor</StyledFormButton> 
        
    </StyleForm>
  )
}