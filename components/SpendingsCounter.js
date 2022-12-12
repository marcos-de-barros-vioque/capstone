import styled from "styled-components";

export default function SpendingsCounter({spendingInput, categoryName}) {
  const allSpendingsValues = spendingInput
    .filter(spendingInput => spendingInput.category === categoryName)
    .reduce((allSpendingsValues, currentSpending) => {
      return allSpendingsValues + Number.parseFloat(currentSpending.amount);
    }, 0);

  return (
    <StyledSpendingsCounter>
      Total Amount: {allSpendingsValues} €
    </StyledSpendingsCounter>
  );
}

const StyledSpendingsCounter = styled.div`
  border-radius: 5%;
  background-color: #549b8c;
  margin-top: 2vh;
  margin-bottom: 2vh;
  padding: 3vw;
  color: #004a4f;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;
