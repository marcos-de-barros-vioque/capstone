import styled from "styled-components";
import NewSpendingForm from "../../components/AddSpendingForm";
import {useRouter} from "next/router";

export default function AddSpendingPage({ spendingInput, addSpendingInput }) {
  const routing = useRouter();

  return (
    <>
    <StyledHeader>
      <StyledTitle>Add Spendings</StyledTitle>
    </StyledHeader>
    <StyledBody>
      <NewSpendingForm addSpending={addSpendingInput} />
      <StyledLogTitle onClick={() => routing.push("/spendings")}> Your Spendings Log</StyledLogTitle>
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

const StyledLogTitle = styled.h2`
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

