// import { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// const ApiContext = createContext();

// const ApiProvider = ({ children }) => {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get('https://api.example.com/movies');
//         setMovies(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };

//     fetchMovies();
//   }, []);

//   return (
//     <ApiContext.Provider value={{ movies, loading }}>
//       {children}
//     </ApiContext.Provider>
//   );
// };

// export { ApiContext, ApiProvider };
