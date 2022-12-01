import styled from "styled-components";

export default function NewSpendingForm() {
  return (
    <StyledAddSpendingForm>
      <StyledFormLabel>Title</StyledFormLabel>
      <StyledFormInput type="text" required />
      <StyledFormLabel>Amount</StyledFormLabel>
      <StyledFormInput type="number" step="0.01" required />
      <StyledFormLabel>Date</StyledFormLabel>
      <StyledFormInput type="date" required />
      <StyledFormLabel>Category</StyledFormLabel>
      <StyledFormInput type="text" required />
      <StyledFormButton type="submit">Submit</StyledFormButton>
    </StyledAddSpendingForm>
  );
}

const StyledAddSpendingForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  border-radius: 5%;
  background-color: #549b8c;
`;

const StyledFormLabel = styled.label`
  margin: 20px 0 5px 0;
  font-size: 20px;
  color: #004a4f;
`;

const StyledFormInput = styled.input`
  border-radius: 5px;
  padding: 10px;
  font-size: 15px;
`;

const StyledFormButton = styled.button`
  align-self: center;
  text-align: center;
  margin: 20px 0 20px 0;
  padding: 10px;
  font-size: 20px;
  border: 2px solid black;
  border-radius: 10px;
  background-color: #549b8c;
`;