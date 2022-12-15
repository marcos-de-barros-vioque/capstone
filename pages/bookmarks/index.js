import Tip from "../../components/Tip";
import {ListItem} from "../../components/TipsList";
import styled from "styled-components";
import Link from "next/link";

export default function Bookmarks({tips, onToggleBookmark}) {
  return (
    <>
      <StyledHeader>
        <StyledTitle>Your Bookmarked Tips</StyledTitle>
      </StyledHeader>
      <StyledBody>
        <h3>Here you can see the tips that you have bookmarked:</h3>
        {!tips.find(tip => tip.isBookmarked) ? (
          <p>You have not bookmarked any tip yet.</p>
        ) : (
          ""
        )}
        {tips.map(
          tip =>
            tip.isBookmarked && (
              <ListItem key={tip.id}>
                <Tip
                  tip={tip}
                  onToggleBookmark={onToggleBookmark}
                  isBookmarked={tip.isBookmarked}
                />{" "}
              </ListItem>
            )
        )}
        <StyledGoBackLink href="/tips">
          Look for more Tips & Tricks
        </StyledGoBackLink>
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
  justify-content: center;
  align-items: center;
  color: #006269;
  border-radius: 10px;
  margin-bottom: 8vh;
`;

const StyledGoBackLink = styled(Link)`
  font-size: 1rem;
  color: #004a4f;
  margin-top: 2vh;
  margin-bottom: 10vh;
`;
