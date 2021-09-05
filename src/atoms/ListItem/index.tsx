import { StyledListItem, StyledDiv } from './styles';

type Repository = {
  id: number;
  full_name: string;
}

type ListItemProps = {
  repository: Repository 
}

const ListItem = ({ repository }: ListItemProps) => {  
  return (
    <StyledListItem>
      <StyledDiv>
        <span>ID: { repository.id }</span>
        <span>Name: { repository.full_name }</span>
      </StyledDiv>
    </StyledListItem>
  );
}

export default ListItem;
