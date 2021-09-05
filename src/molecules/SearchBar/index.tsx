import { useContext, useState } from 'react';
import Button from '../../atoms/Button';
import SearchContext from '../../template/SearchRepository/SearchProvider';
import { Container, Search } from './styles';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const { fetchRepos } = useContext(SearchContext)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return (
    <Container>
      <Search 
        onChange={e => handleChange(e)} 
        value={value}
        placeholder="facebook"
      />
      <Button onSearch={() => fetchRepos(value)}>
        Buscar
      </Button>
    </Container>
  );
}

export default SearchBar;
