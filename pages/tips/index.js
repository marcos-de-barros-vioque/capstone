import styled from "styled-components";
import Tip from "../../components/Tip";
import {ListItem} from "../../components/TipsList";
import {useState} from "react";

export default function TipsPage({tips, onToggleBookmark, tip}) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  function handleToggleFilter(event) {
    const selectedValue = event.target.value;

    if (selectedCategories.includes(selectedValue)) {
      setSelectedCategories(previousSelectedCategories =>
        previousSelectedCategories.filter(
          selectedCategory => selectedCategory !== selectedValue
        )
      );
    } else {
      setSelectedCategories(previousSelectedCategories => [
        ...previousSelectedCategories,
        selectedValue,
      ]);
    }
  }

  let filteredTips = tips;

  for (let i = 0; i < selectedCategories.length; i++) {
    filteredTips = filteredTips.filter(tip => {
      return tip.category.includes(selectedCategories[i]);
    });
  }

  return (
    <>
      <StyledHeader>
        <StyledTitle>Best Tips & Tricks</StyledTitle>
      </StyledHeader>
      <StyledBody>
        <StyledIntro>
          Choose a category to get the corresponding tips:
        </StyledIntro>
        <StyledForm>
          <StyledDiv>
            <StyledCheckboxInput
              type="checkbox"
              id="essen"
              value="Food"
              checked={selectedCategories.includes("Food")}
              onChange={handleToggleFilter}
            />
            <StyledLabel htmlFor="essen">Food</StyledLabel>
          </StyledDiv>
          <StyledDiv>
            <StyledCheckboxInput
              type="checkbox"
              id="kleidung"
              value="Clothes"
              checked={selectedCategories.includes("Clothes")}
              onChange={handleToggleFilter}
            />
            <StyledLabel htmlFor="kleidung">Clothes</StyledLabel>
          </StyledDiv>
          <StyledDiv>
            <StyledCheckboxInput
              type="checkbox"
              id="haushalt"
              value="Household"
              checked={selectedCategories.includes("Household")}
              onChange={handleToggleFilter}
            />
            <StyledLabel htmlFor="haushalt">Household</StyledLabel>
          </StyledDiv>
          <StyledDiv>
            <StyledCheckboxInput
              type="checkbox"
              id="unterhaltung"
              value="Entertainment"
              checked={selectedCategories.includes("Entertainment")}
              onChange={handleToggleFilter}
            />
            <StyledLabel htmlFor="unterhaltung">Entertainment</StyledLabel>
          </StyledDiv>
          <StyledDiv>
            <StyledCheckboxInput
              type="checkbox"
              id="benzin"
              value="Gasoline"
              checked={selectedCategories.includes("Gasoline")}
              onChange={handleToggleFilter}
            />
            <StyledLabel htmlFor="benzin">Gasoline</StyledLabel>
          </StyledDiv>
          <StyledDiv>
            <StyledCheckboxInput
              type="checkbox"
              id="restaurants"
              value="Restaurants"
              checked={selectedCategories.includes("Restaurants")}
              onChange={handleToggleFilter}
            />
            <StyledLabel htmlFor="restaurants">Restaurants</StyledLabel>
          </StyledDiv>
        </StyledForm>
        {filteredTips.map(filteredTip => {
          return (
            <ListItem key={filteredTip.id}>
              <Tip
                tips={tip}
                tip={filteredTip}
                onToggleBookmark={onToggleBookmark}
              />
            </ListItem>
          );
        })}
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

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #006269;
  border-radius: 10px;
  margin-bottom: 8vh;
`;

const StyledIntro = styled.h3`
  font-size: 1.2rem;
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 3fr 3fr;
  gap: 1rem;
  margin: 2vh 1em 4vh 1em;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCheckboxInput = styled.input`
  width: 2vw;
  height: 2vh;
  margin-right: 1vw;
`;

const StyledLabel = styled.label`
  font-size: 1em;
`;
