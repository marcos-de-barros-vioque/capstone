import Tip from "./Tip";
import styled from "styled-components";

export default function TipsList({tips, toggleBookmarking}) {
  return (
    <StyledList>
      {tips?.map(tip => {
        return (
          <ListItem key={tip.id}>
            <Tip tip={tip} toggleBookmarking={toggleBookmarking} />
          </ListItem>
        );
      })}
    </StyledList>
  );
}

const StyledList = styled.ul`
  line-height: 1.2 rem;
`;

const ListItem = styled.li`
  list-style: none;
`;

export {ListItem};
