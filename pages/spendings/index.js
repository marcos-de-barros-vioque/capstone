import styled from "styled-components";
import {useRouter} from "next/router";

export default function SpendingsPage() {
  const routing = useRouter();

  return (
    <>
    <StyledHeader>
      <StyledTitle>Your Spendings</StyledTitle>
    </StyledHeader>
    <StyledBody>
      <StyledLog>
        <StyledLogEntry>
          <StyledLogCard>
            <p>Jacket | 100€ | 01-12-2022 | Clothes</p>
          </StyledLogCard>
          <StyledLogCard>
            <p>Supermarket | 50 € | 02-12-2022 | Food and Drinks</p>
          </StyledLogCard>
          <StyledLogCard>
            <p>Jacket | 100€ | 01-12-2022 | Clothes</p>
          </StyledLogCard>
          <StyledLogCard>
            <p>Supermarket | 50 € | 02-12-2022 | Food and Drinks</p>
          </StyledLogCard>
        </StyledLogEntry>
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
  color: #006269;
  font-size: 30px;
`;

const StyledLog = styled.ul`
  margin-right: 70px;
  margin-left: 70px;
`;

const StyledLogEntry = styled.li`
  list-style-type: none;
`;

const StyledLogCard = styled.div`
  width: 100%;
  border-radius: 5%;
  background-color: #549b8c;
  margin-top: 10px;
  padding: 10px;
  color: white;
`;

const StyledBackButton = styled.button`
  align-self: center;
  text-align: center;
  padding: 15px;
  font-size: 18px;
  border-radius: 30px;
  color: white;
  background-color: #004A4F;
  margin-bottom: 100px;
`;
