import styled from "styled-components";
import TipsList from "../../components/TipsList";

export default function TipsPage({tips}) {
  return (
    <div>
      <StyledHeader>
        <StyledTitle>Best Tips & Tricks</StyledTitle>
      </StyledHeader>
      <StyledBody>
        <TipsList tips={tips} />
      </StyledBody>
    </div>
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

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #006269;
  border-radius: 10px;
`;
