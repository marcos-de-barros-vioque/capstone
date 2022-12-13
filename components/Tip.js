import styled from "styled-components";
import Image from "next/image";

export default function Tip({tip}) {
  const {name, category, text, image} = tip;

  return (
    <>
      <StyledSection>
        <h3>{name}</h3>
        <ImageContainer>
          <StyledImage
            alt={`Image describing a tip to save on ${category.toLowerCase()}`}
            src={image}
            width={150}
            height={75}
          />
        </ImageContainer>
        <p>{text}</p>
        <p>{category}</p>
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 5%;
  border: 1em #004a4f;
  background-color: #549b8c;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  padding: 20px;
  margin-bottom: 2vh;
  margin: 1rem;
`;

const StyledImage = styled(Image)`
  object-fit: contain;
`;
const ImageContainer = styled.div`
  text-align: center;
`;
