import styled from "styled-components";

export default function SpendingsCounter({
  spendingInput,
  amount,
  categoryName,
}) {
  let totalSpendingsValue = 0;
  let allSpendingsValues = 0;

  if (amount) {
    console.log(spendingInput, amount);
    spendingInput
      .filter(spendingInput => spendingInput.category === categoryName)
      .slice(amount)
      .reduce(amount => {
        allSpendingsValues = allSpendingsValues + Number.parseFloat(amount);
      });
  }

  totalSpendingsValue = amount + allSpendingsValues;

  return (
    <StyledSpendingsCounter>
      Total Amount: {totalSpendingsValue} €
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
