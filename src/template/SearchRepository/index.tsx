import { Container } from './styles';
import SearchBar from '../../molecules/SearchBar';
import List from '../../molecules/List/List';
import Title from '../../atoms/Title';
import { SearchProvider } from './SearchProvider';

function SearchRepository() {
  return (
    <Container>
      <Title>Buscador de Repositórios</Title>
      <SearchProvider>
        <SearchBar/>
        <List />
      </SearchProvider>
    </Container>
  );
}

export default SearchRepository;
