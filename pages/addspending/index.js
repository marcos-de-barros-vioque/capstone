import styled from "styled-components";
import NewSpendingForm from "../../components/AddSpendingForm";

export default function AddSpendingPage({ spendingInput, addSpendingInput }) {
  return (
    <>
    <StyledBody>
      <StyledTitle>Add Spendings</StyledTitle>
      <NewSpendingForm addSpending={addSpendingInput} />
      <StyledLogSubtitle> Your Spendings Log</StyledLogSubtitle>
      <StyledLog>
      {spendingInput.map((spendingInput) => (
          // eslint-disable-next-line react/jsx-key
          <StyledLogEntry>
            {spendingInput.title}
            {spendingInput.amount}€
            {spendingInput.date}
            {spendingInput.category}
          </StyledLogEntry>
        ))}
      </StyledLog>
    </StyledBody>
    </>
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
  margin-top: 20px;
  align-content: center;
`;

const StyledLogSubtitle = styled.h3`
  align-content: center;
`;

const StyledLog = styled.ul`
  margin-top: 20px;
  align-content: center;
  padding: 20px;
`;

const StyledLogEntry = styled.li`
  margin-top: 20px;
  align-content: center;
`;

