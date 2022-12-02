import styled from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";
import SpendingEntry from "./SpendingEntry";

export default function NewSpendingForm({ setSpendingData }) {
  const routing = useRouter();
  const [showSpendingEntry, setShowSpendingEntry] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const spendingsAll = Object.fromEntries(formData);

    setSpendingData((spendingData) => {
      return {
        ...spendingData, spendingsEntries: [ ...spendingData.spendingsEntries, { ...spendingsAll,}],
      };
    });
    setShowSpendingEntry(true);
  }


  return (
    <div>{showSpendingEntry && ( 
      <SpendingEntry text={"Your spending has been successfully added!"} onClose={() => routing.push("/spendings")} />)} {!showSpendingEntry && (
      <> {" "}
    <StyledAddSpendingForm onSubmit={handleSubmit}>
      <StyledFormLabel>Title</StyledFormLabel>
      <StyledFormInput type="text" required />
      <StyledFormLabel>Amount</StyledFormLabel>
      <StyledFormInput type="number" step="0.01" required />
      <StyledFormLabel>Date</StyledFormLabel>
      <StyledFormInput type="date" required />
      <StyledFormLabel>Category</StyledFormLabel>
      <select type="select" required >
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
    </>
    )}
    </div>
  );
}

const StyledAddSpendingForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200%;
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
