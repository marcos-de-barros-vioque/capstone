import styled from "styled-components";
import { useRouter } from "next/router";

export default function NewSpendingForm({ onAddSpending }) {
  
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddSpending(data);
    router.push("./spendings");
  }


  return (
    <StyledAddSpendingForm onSubmit={handleSubmit}>
      <StyledFormLabel>Title</StyledFormLabel>
      <StyledFormInput type="text" id="title" name="title" required />
      <StyledFormLabel>Amount</StyledFormLabel>
      <StyledFormInput type="number" id="amount" name="amount" step="0.01" min="0" required />
      <StyledFormLabel>Date</StyledFormLabel>
      <StyledFormInput type="date" id="date" name="date" required />
      <StyledFormLabel>Category</StyledFormLabel>
      <select type="select" id="category" name="category" required >
        <option>Food and Drinks</option>
        <option>Clothes</option>
        <option>Household</option>
        <option>Entertainment</option>
        <option>Gasoline</option>
        <option>Restaurants</option>
        <option>Others</option>
      </select>
      <StyledFormButton type="submit">Submit</StyledFormButton>
    </StyledAddSpendingForm>
    )
}

const StyledAddSpendingForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
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
