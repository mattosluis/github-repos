import { useContext } from 'react';
import ListItem from '../../atoms/ListItem';
import SearchContext from '../../template/SearchRepository/SearchProvider';
import { Container } from './styles';

const List = () => {  
  const { repositories } = useContext(SearchContext)

  return (
    <Container>
      <ul>
        { repositories && repositories.map(repository => (
          <ListItem repository={repository} key={repository.id} />
        ))}
      </ul>
    </Container>
  );
}

export default List;
