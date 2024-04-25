import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const SearchContext = createContext();

const apiKey = '3efdf314';

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchSearchResults = async (query) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);
      
      if (response.data.Response === "True") {
        setMovies(response.data.Search);
        setError('');
      } else {
        setMovies([]);
        setError(response.data.Error || 'No results found.');
      }
      
      setLoading(false);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setError('An error occurred while fetching search results.');
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      fetchSearchResults(searchQuery);
    }
  }, [searchQuery]);

  return (
    <SearchContext.Provider value={{ movies, loading, error, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
