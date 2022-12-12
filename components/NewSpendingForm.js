import styled from "styled-components";
import {useRouter} from "next/router";

export default function NewSpendingForm({onAddSpending}) {
  const router = useRouter();

  const handleSubmit = event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddSpending(data);

    const {category} = data;
    alert("Your spending has been successfully added!");
    router.push("./" + category.toLowerCase());
  };

  return (
    <StyledBody>
      <StyledIntro>Please fill the form to add your spendings:</StyledIntro>
      <StyledAddSpendingForm onSubmit={handleSubmit}>
        <StyledFormLabel>Title</StyledFormLabel>
        <StyledFormInput type="text" id="title" name="title" required />
        <StyledFormLabel>Amount</StyledFormLabel>
        <StyledFormInput
          type="number"
          id="amount"
          name="amount"
          step="0.01"
          min="0"
          required
        />
        <StyledFormLabel>Date</StyledFormLabel>
        <StyledFormInput type="date" id="date" name="date" required />
        <StyledFormLabel>Category</StyledFormLabel>
        <StyledFormSelect type="select" id="category" name="category" required>
          <option value="Food">Food</option>
          <option value="Clothes">Clothes</option>
          <option value="Household">Household</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Gasoline">Gasoline</option>
          <option value="Restaurants">Restaurants</option>
        </StyledFormSelect>
        <StyledFormButton type="submit">Submit</StyledFormButton>
      </StyledAddSpendingForm>
    </StyledBody>
  );
}

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledIntro = styled.p`
  justify-content: center;
  font-size: 1.2rem;
`;

const StyledAddSpendingForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1vh;
  margin-bottom: 10vh;
  width: 100%;
  border-radius: 5%;
  background-color: #549b8c;
`;

const StyledFormLabel = styled.label`
  margin: 1vh 0 1vh 0;
  font-size: 1.2rem;
  color: #004a4f;
`;

const StyledFormInput = styled.input`
  border-radius: 5px;
  padding: 1vh;
  font-size: 1rem;
`;

const StyledFormSelect = styled.select`
  border-radius: 5px;
  padding: 1vh;
  font-size: 1rem;
`;

const StyledFormButton = styled.button`
  align-self: center;
  text-align: center;
  margin: 3vw 0 3vw 0;
  padding: 1vh 2vw;
  font-size: 1rem;
  border-radius: 30px;
  color: white;
  background-color: #004a4f;
`;
