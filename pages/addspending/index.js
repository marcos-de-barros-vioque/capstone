import styled from "styled-components";
import NewSpendingForm from "../../components/NewSpendingForm";

export default function AddSpendingPage({onAddSpendingInput}) {
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
  margin-top: 10vh;
  justify-content: center;
  align-items: center;
  color: #004a4f;
`;

const StyledTitle = styled.h1`
  align-content: center;
`;

const StyledBody = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #006269;
  border-radius: 10px;
`;
