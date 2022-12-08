import styled from "styled-components";
import {Icon} from "@iconify/react";
import Link from "next/link";

export default function CategoriesCard() {
  return (
    <>
      <StyledCategoryCardOverview>
        <StyledCategoryCardLink href="/food">
          <StyledCategoryCardTitle>Food</StyledCategoryCardTitle>
          <StyledCategoryCardIcon
            icon="fluent:food-apple-24-filled"
            alt="Food Category Icon"
            width="40"
            height="40"
          />
          <StyledCategoryCardList></StyledCategoryCardList>
        </StyledCategoryCardLink>
        <StyledCategoryCardLink href="/clothes">
          <StyledCategoryCardTitle>Clothes</StyledCategoryCardTitle>
          <StyledCategoryCardIcon
            icon="game-icons:clothes"
            alt="Clothes Category Icon"
            width="40"
            height="40"
          />
          <StyledCategoryCardList></StyledCategoryCardList>
        </StyledCategoryCardLink>
        <StyledCategoryCardLink href="/household">
          <StyledCategoryCardTitle>Household</StyledCategoryCardTitle>
          <StyledCategoryCardIcon
            icon="maki:furniture"
            alt="Household Category Icon"
            width="40"
            height="40"
          />
          <StyledCategoryCardList></StyledCategoryCardList>
        </StyledCategoryCardLink>
        <StyledCategoryCardLink href="/entertainment">
          <StyledCategoryCardTitle>Entertainment</StyledCategoryCardTitle>
          <StyledCategoryCardIcon
            icon="maki:theatre"
            alt="Entertainment Category Icon"
            width="40"
            height="40"
          />
          <StyledCategoryCardList></StyledCategoryCardList>
        </StyledCategoryCardLink>
        <StyledCategoryCardLink href="/gasoline">
          <StyledCategoryCardTitle>Gasoline</StyledCategoryCardTitle>
          <StyledCategoryCardIcon
            icon="material-symbols:local-gas-station"
            alt="Gasoline Category Icon"
            width="40"
            height="40"
          />
          <StyledCategoryCardList></StyledCategoryCardList>
        </StyledCategoryCardLink>
        <StyledCategoryCardLink href="/restaurants">
          <StyledCategoryCardTitle>Restaurants</StyledCategoryCardTitle>
          <StyledCategoryCardIcon
            icon="ion:restaurant-sharp"
            alt="Restaurants Category Icon"
            width="40"
            height="40"
          />
          <StyledCategoryCardList></StyledCategoryCardList>
        </StyledCategoryCardLink>
      </StyledCategoryCardOverview>
    </>
  );
}

const StyledCategoryCardOverview = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr;
  gap: 1rem;
  margin-top: 3vh;
  margin-bottom: 6vh;
`;

const StyledCategoryCardLink = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
  color: #004a4f;
  border-radius: 5%;
  background-color: #549b8c;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCategoryCardTitle = styled.h3`
  margin-left: 3vw;
  margin-right: 3vw;
`;

const StyledCategoryCardIcon = styled(Icon)`
  color: #004a4f;
`;

const StyledCategoryCardList = styled.ul`
  margin-right: 3vw;
  margin-left: 3vw;
`;
