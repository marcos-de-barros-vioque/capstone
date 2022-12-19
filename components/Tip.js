import styled from "styled-components";
import Image from "next/image";
import {Icon} from "@iconify/react";

export default function Tip({tip, onToggleBookmark}) {
  const {name, category, text, image, id} = tip;

  return (
    <StyledSection>
      <StyledButtonWrapper>
        <StyledButton
          type="button"
          onClick={() => {
            onToggleBookmark(id);
          }}
        >
          <StyledIcon
            icon="material-symbols:bookmark-add-outline-rounded"
            alt="Bookmark Icon"
            width="40"
            height="40"
          />
        </StyledButton>
      </StyledButtonWrapper>
      <StyledTipTitle>{name}</StyledTipTitle>
      <StyledFlexContainer>
        <StyledImage
          alt={`How to save money on ${category.toLowerCase()}`}
          src={image}
          width={300}
          height={150}
        />
        <StyledTipDescription>{text}</StyledTipDescription>
        <StyledTipCategory>Category: {category}</StyledTipCategory>
      </StyledFlexContainer>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5%;
  color: #004a4f;
  background-color: #17ab9c;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  margin-bottom: 2vh;
  margin: 1rem;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  border-style: none;
  background-color: #17ab9c;
  margin-top: 1vh;
`;

const StyledIcon = styled(Icon)`
  color: #004a4f;
`;

const StyledTipTitle = styled.h3`
  text-decoration: underline;
`;

const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled(Image)`
  object-fit: contain;
`;

const StyledTipDescription = styled.p`
  margin-top: 2vh;
  text-align: center;
  margin-right: 2vh;
  margin-left: 2vh;
`;

const StyledTipCategory = styled.p`
  margin-top: 0.2vh;
  text-align: center;
`;
