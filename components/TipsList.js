import Tip from "../Tip";
import styled from "styled-components";
import {StyledList} from "../Facility";

export default function TipsList({tips}) {
  return (
    <>
      <StyledList>
        {tips.map(tip => {
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

const ListItem = styled.li`
  list-style: none;
`;
