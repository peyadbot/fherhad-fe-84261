import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const MovieContext = createContext();

const apiKey = '3efdf314';
const apiUrl = `https://www.omdbapi.com/?s=Batman&apikey=${apiKey}`;

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]); // State for storing movies
  const [loading, setLoading] = useState(true); 
  const [fetched, setFetched] = useState(false); // State to track if data has been fetched

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (!fetched) { // fetch data if it hasn't been fetched before
          const response = await axios.get(apiUrl);
          
          setMovies(response.data.Search); // Set the fetched movies
          setLoading(false);
          setFetched(true); // Mark data as fetched
        }
      } catch (error) {
        console.error('Error fetching data:', error); // Log any errors
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchMovies(); // Call the fetchMovies function
  }, [fetched]); // Dependency array ensures useEffect runs only when fetched changes

  return (
    <MovieContext.Provider value={{ movies, loading }}>
      {children}
    </MovieContext.Provider>
  );
};
