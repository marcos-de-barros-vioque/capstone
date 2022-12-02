import styled from "styled-components";
import { useRouter } from "next/router";

export default function SpendingsPage() {
  const routing = useRouter();

    return (
        <StyledBody>
          <StyledTitle>Your Spendings</StyledTitle>
          <StyledBackButton onClick={() => routing.push("/addspending")}>Back</StyledBackButton>
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

    const StyledBackButton = styled.button`
  align-self: center;
  text-align: center;
  margin: 20px 0 20px 0;
  padding: 10px;
  font-size: 20px;
  border: 2px solid black;
  border-radius: 10px;
  background-color: #549b8c;
`;