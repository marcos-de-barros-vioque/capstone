import styled from "styled-components";
import Image from "next/image";

export default function Tip({tip}) {
  const {name, category, text, image} = tip;

  return (
    <>
      <StyledSection>
        <StyledTipTitle>{name}</StyledTipTitle>
        <StyledImage
          alt={`Image describing a tip to save on ${category.toLowerCase()}`}
          src={image}
          width={300}
          height={150}
        />
        <StyledTipDescription>{text}</StyledTipDescription>
        <StyledTipCategory>Category: {category}</StyledTipCategory>
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5%;
  color: #004a4f;
  background-color: #549b8c;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  margin-bottom: 2vh;
  margin: 1rem;
`;

const StyledTipTitle = styled.h3`
  text-align: center;
  text-decoration: underline;
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
