import styled from "styled-components";
import {useRouter} from "next/router";
import {useState} from "react";
import UserFeedback from "./UserFeedback";

export default function NewSpendingForm({onAddSpending}) {
  const [showUserFeedback, setShowUserFeedback] = useState(false);
  const router = useRouter();

  const handleSubmit = event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddSpending(data);

    const {category} = data;
    setShowUserFeedback(true);
    //alert("Your spending has been successfully added!");
    router.push("./" + category.toLowerCase());
  };

  return (
    <StyledBody>
      {showUserFeedback && (
        <UserFeedback
          text="Your spending has been successfully added!"
          onClose={onAddSpending}
        />
      )}
      {!showUserFeedback && (
        <>
          <StyledIntro>Please fill the form to add your spendings:</StyledIntro>
          <StyledAddSpendingForm onSubmit={handleSubmit}>
            <StyledFormLabel>Title</StyledFormLabel>
            <StyledFormInput type="text" id="title" name="title" required />
            <StyledFormLabel>Amount</StyledFormLabel>
            <StyledFormInput
              type="number"
              id="amount"
              name="amount"
              step="0.01"
              min="0"
              required
            />
            <StyledFormLabel>Date</StyledFormLabel>
            <StyledFormInput type="date" id="date" name="date" required />
            <StyledFormLabel>Category</StyledFormLabel>
            <StyledFormSelect
              type="select"
              id="category"
              name="category"
              required
            >
              <option value="Food">Food</option>
              <option value="Clothes">Clothes</option>
              <option value="Household">Household</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Gasoline">Gasoline</option>
              <option value="Restaurants">Restaurants</option>
            </StyledFormSelect>
            <StyledFormButton type="submit">Submit</StyledFormButton>
          </StyledAddSpendingForm>
        </>
      )}
    </StyledBody>
  );
}

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledIntro = styled.h3`
  justify-content: center;
  font-size: 1.2rem;
`;

const StyledAddSpendingForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1vh;
  margin-bottom: 10vh;
  width: 100%;
  border-radius: 5%;
  background-color: #17ab9c;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const StyledFormLabel = styled.label`
  margin: 1vh 0 1vh 0;
  font-size: 1.2rem;
  color: #004a4f;
`;

const StyledFormInput = styled.input`
  border-radius: 5px;
  padding: 1vh;
  color: #004a4f;
  font-size: 1rem;
  background: hsla(110, 78%, 59%, 1);

  background: radial-gradient(
    circle,
    hsla(110, 78%, 59%, 1) 0%,
    hsla(174, 76%, 38%, 1) 100%
  );

  background: -moz-radial-gradient(
    circle,
    hsla(110, 78%, 59%, 1) 0%,
    hsla(174, 76%, 38%, 1) 100%
  );

  background: -webkit-radial-gradient(
    circle,
    hsla(110, 78%, 59%, 1) 0%,
    hsla(174, 76%, 38%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#61E846", endColorstr="#17AB9C", GradientType=1 );
`;

const StyledFormSelect = styled.select`
  border-radius: 5px;
  padding: 1vh;
  font-size: 1rem;
  color: #004a4f;
  background: hsla(110, 78%, 59%, 1);

  background: radial-gradient(
    circle,
    hsla(110, 78%, 59%, 1) 0%,
    hsla(174, 76%, 38%, 1) 100%
  );

  background: -moz-radial-gradient(
    circle,
    hsla(110, 78%, 59%, 1) 0%,
    hsla(174, 76%, 38%, 1) 100%
  );

  background: -webkit-radial-gradient(
    circle,
    hsla(110, 78%, 59%, 1) 0%,
    hsla(174, 76%, 38%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#61E846", endColorstr="#17AB9C", GradientType=1 );
`;

const StyledFormButton = styled.button`
  align-self: center;
  text-align: center;
  margin: 3vw 0 3vw 0;
  padding: 1vh 2vw;
  font-size: 1rem;
  border-radius: 30px;
  color: white;
  background-color: #004a4f;
`;
