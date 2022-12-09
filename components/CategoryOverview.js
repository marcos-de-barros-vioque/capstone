import styled from "styled-components";
import {useRouter} from "next/router";
import SpendingsCounter from "./SpendingsCounter";
import Link from "next/link";

export default function CategoryOverview({spendingInput, categoryName}) {
  const routing = useRouter();

  return (
    <>
      <StyledHeader>
        <StyledTitle>Your Spendings for {categoryName}</StyledTitle>
      </StyledHeader>
      <StyledBody>
        <SpendingsCounter />
        <h3>See all your entries:</h3>
        <StyledLog>
          {spendingInput
            .filter(spendingInput => spendingInput.category === categoryName)
            .map((spendingInput, index) => {
              return (
                <StyledLogEntry key={index}>
                  <StyledLogCard>
                    <StyledLogCardList>
                      {
                        <>
                          <StyledLogCardListItem>
                            Title: {spendingInput.title}
                          </StyledLogCardListItem>
                          <StyledLogCardListItem>
                            Amount: {spendingInput.amount} €
                          </StyledLogCardListItem>
                          <StyledLogCardListItem>
                            Date: {spendingInput.date}
                          </StyledLogCardListItem>
                          <StyledLogCardListItem>
                            Category: {spendingInput.category}
                          </StyledLogCardListItem>
                        </>
                      }
                    </StyledLogCardList>
                  </StyledLogCard>
                </StyledLogEntry>
              );
            })}
        </StyledLog>
        <StyledNewSpendingButton onClick={() => routing.push("/addspending")}>
          Add New Spending
        </StyledNewSpendingButton>
        <StyledGoBackLink href="/">Return to overview</StyledGoBackLink>
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
  align-items: center;
  color: #006269;
  font-size: 1rem;
`;

const StyledLog = styled.ul`
  margin-top: 0.1em;
  justify-self: center;
`;

const StyledLogEntry = styled.li`
  list-style-type: none;
  margin-top: 1em;
`;

const StyledLogCard = styled.div`
  border-radius: 5%;
  background-color: #549b8c;
  margin-top: 1vh;
  margin-right: 8vw;
  padding: 2vw 6vw 2vw 1vw;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  color: #004a4f;
`;

const StyledLogCardList = styled.ul`
  margin-top: 0.1em;
  margin-right: -3vw;
  padding-left: 2vw;
  padding-right: 2vw;
`;

const StyledLogCardListItem = styled.li`
  list-style-type: none;
`;

const StyledNewSpendingButton = styled.button`
  align-self: center;
  text-align: center;
  padding: 1vh 3vw;
  font-size: 1rem;
  border-radius: 30px;
  color: white;
  background-color: #004a4f;
  margin-top: 2vh;
`;

const StyledGoBackLink = styled(Link)`
  font-size: 1rem;
  color: #004a4f;
  margin-top: 2vh;
  margin-bottom: 10vh;
`;
