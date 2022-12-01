import styled from "styled-components";

export default function TipsPage() {
  return (
    <div>
      <StyledBody>
        <p>This page is under construction</p>
      </StyledBody>
    </div>
  );
}

const StyledBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #006269;
  border-radius: 10px;
  font-size: 30px;
  height: 75vh;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
