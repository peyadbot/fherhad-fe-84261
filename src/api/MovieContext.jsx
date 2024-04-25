import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const MovieContext = createContext();

const apiKey = '3efdf314';
const apiUrl = `https://www.omdbapi.com/?s=Batman&apikey=${apiKey}`;


export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (!fetched) {
          const response = await axios.get(apiUrl);
          
          setMovies(response.data.Search);
          setLoading(false);
          setFetched(true);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [fetched]);

  return (
    <MovieContext.Provider value={{ movies, loading }}>
      {children}
    </MovieContext.Provider>
  );
};
