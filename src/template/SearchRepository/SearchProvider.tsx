import React, { createContext, useState } from "react";
import axios from 'axios';

type Repository = {
  id: number;
  full_name: string;
}

type SearchContextType = {
  fetchRepos: (repositoryName: string) => void,
  repositories: Repository[]
}

const SearchContext = createContext<SearchContextType>({ 
  fetchRepos: () => {},
  repositories: []
});

export const SearchProvider:React.FC = ({ children }) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const fetchRepos = async (repositoryName: string) => {
    const { data } = await axios.get<Repository[]>(`https://api.github.com/orgs/${repositoryName}/repos`)
    setRepositories(data);
  }

  return (
    <SearchContext.Provider value={{
      fetchRepos,
      repositories
    }}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContext;