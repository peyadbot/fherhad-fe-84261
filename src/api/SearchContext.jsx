import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const SearchContext = createContext();

const apiKey = '3efdf314';

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState(''); // State for storing search query
  const [movies, setMovies] = useState([]); // State for storing search results
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(''); 

  const fetchSearchResults = async (query) => {
    try {
      setLoading(true); // Set loading to true while fetching data
      const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);
      
      if (response.data.Response === "True") {
        setMovies(response.data.Search); // Set search results if response is successful
        setError('');
      } else {
        setMovies([]); // Set empty array if no results found
        setError(response.data.Error || 'No results found.'); 
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching search results:', error); // Log any errors
      setError('An error occurred while fetching search results.'); // Set generic error message
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery) { // Only fetch search results if search query is not empty
      fetchSearchResults(searchQuery);
    }
  }, [searchQuery]); // Dependency array ensures useEffect runs only when searchQuery changes

  return (
    <SearchContext.Provider value={{ movies, loading, error, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
