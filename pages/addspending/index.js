import styled from "styled-components";
import NewSpendingForm from "../../components/AddSpendingForm";

export default function AddSpendingPage() {
  return (
    <StyledBody>
      <StyledTitle>Add Spendings</StyledTitle>
      <NewSpendingForm />
    </StyledBody>
  );
}

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  color: #006269;
  border-radius: 10px;
  font-size: 30px;
  height: 75vh;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StyledTitle = styled.h2`
  align-content: center;
`;
