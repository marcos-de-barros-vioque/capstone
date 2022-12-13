import Tip from "./Tip";
import styled from "styled-components";

export default function TipsList({tips}) {
  return (
    <>
      <StyledList>
        {tips?.map(tip => {
          return (
            <ListItem key={tip.id}>
              <Tip tip={tip} />
            </ListItem>
          );
        })}
      </StyledList>
    </>
  );
}

const StyledList = styled.ul`
  padding: 0;
  line-height: 1.2 rem;
`;

const ListItem = styled.li`
  list-style: none;
`;
