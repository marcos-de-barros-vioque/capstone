import styled from "styled-components";
import NewSpendingForm from "../../components/AddSpendingForm";

export default function AddSpendingPage({ onAddSpendingInput }) {

  return (
    <>
    <StyledHeader>
      <StyledTitle>Add Spendings</StyledTitle>
    </StyledHeader>
    <StyledBody>
      <NewSpendingForm onAddSpending={onAddSpendingInput} />
    </StyledBody>
    </>
  );
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  justify-content: center;
  align-items: center;
  color: #004A4F;
`;

const StyledTitle = styled.h1`
   align-content: center;
`;

const StyledBody = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  color: #006269;
  border-radius: 10px;
  height: 75vh;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
