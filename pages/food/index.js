import styled from "styled-components";
import {useRouter} from "next/router";
import CategoryOverview from "../../components/CategoryOverview";

export default function FoodPage() {
  const routing = useRouter();

  return (
    <>
      <CategoryOverview />
      <StyledBackButton onClick={() => routing.push("/addspending")}>
        Add New Spending
      </StyledBackButton>
    </>
  );
}

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
