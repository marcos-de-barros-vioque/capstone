import styled from "styled-components";
import {useRouter} from "next/router";

export default function CategoryOverview({spendingInput, category}) {
  const routing = useRouter();

  return (
    <>
      <StyledHeader>
        <StyledTitle>Your Spendings for {`${category}`}</StyledTitle>
      </StyledHeader>
      <StyledBody>
        <StyledLog>
          {spendingInput
            .filter(({category}) => category)
            .map(({index}) => {
              return (
                <StyledLogEntry key={index}>
                  <StyledLogCard>
                    {`${spendingInput.title} / ${spendingInput.amount} € / ${spendingInput.date} / ${spendingInput.category}`}
                  </StyledLogCard>
                </StyledLogEntry>
              );
            })}
        </StyledLog>
        <StyledBackButton onClick={() => routing.push("/addspending")}>
          Add New Spending
        </StyledBackButton>
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
  color: #006269;
  font-size: 1rem;
`;

const StyledLog = styled.ul`
  margin-right: 3vw;
  margin-left: 3vw;
`;

const StyledLogEntry = styled.li`
  list-style-type: none;
`;

const StyledLogCard = styled.div`
  width: 100%;
  border-radius: 5%;
  background-color: #549b8c;
  margin-top: 1vh;
  padding: 0.5vw;
  color: #004a4f;
`;

const StyledBackButton = styled.button`
  align-self: center;
  text-align: center;
  padding: 1vh 1vw;
  font-size: 1.2rem;
  border-radius: 30px;
  color: white;
  background-color: #004a4f;
  margin-bottom: 10vh;
`;
