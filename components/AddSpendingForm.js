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
    <StyledBody>
    <StyledIntro>Please fill the form to add your spendings:</StyledIntro>
    <StyledAddSpendingForm onSubmit={handleSubmit}>
      <StyledFormLabel>Title</StyledFormLabel>
      <StyledFormInput type="text" id="title" name="title" required />
      <StyledFormLabel>Amount</StyledFormLabel>
      <StyledFormInput type="number" id="amount" name="amount" step="0.01" min="0" required />
      <StyledFormLabel>Date</StyledFormLabel>
      <StyledFormInput type="date" id="date" name="date" required />
      <StyledFormLabel>Category</StyledFormLabel>
      <StyledFormSelect type="select" id="category" name="category" required >
        <option>Food and Drinks</option>
        <option>Clothes</option>
        <option>Household</option>
        <option>Entertainment</option>
        <option>Gasoline</option>
        <option>Restaurants</option>
        <option>Others</option>
      </StyledFormSelect>
      <StyledFormButton type="submit">Submit</StyledFormButton>
    </StyledAddSpendingForm>
    </StyledBody>
    );
}

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`;

const StyledIntro = styled.p`
justify-content: center;
font-size: 20px;
`;

const StyledAddSpendingForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 150%;
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

const StyledFormSelect = styled.select`
  border-radius: 5px;
  padding: 10px;
  font-size: 15px;
`;

const StyledFormButton = styled.button`
  align-self: center;
  text-align: center;
  margin: 25px 0 20px 0;
  padding: 10px;
  font-size: 18px;
  border-radius: 30px;
  color: white;
  background-color: #004A4F;
`;
