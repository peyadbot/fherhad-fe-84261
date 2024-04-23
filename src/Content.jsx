// import { useContext } from 'react';
// import { Box, Grid, Text } from '@chakra-ui/react';
// import { ApiContext } from './ApiContext';
// import MovieCard from './MovieCard';

// const MovieGridPage = () => {
//   const { movies, loading } = useContext(ApiContext);

//   return (
//     <Box p={8}>
//       <Text fontSize="xl" fontWeight="bold" mb={4}>
//         Popular Movies
//       </Text>
//       <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
//         {loading ? (
//           <Text>Loading...</Text>
//         ) : (
//           movies.map((movie) => (
//             <MovieCard
//               key={movie.id}
//               title={movie.title}
//               image={movie.poster}
//               description={movie.description}
//               genre={movie.genre}
//               duration={movie.duration}
//               views={movie.views}
//             />
//           ))
//         )}
//       </Grid>
//     </Box>
//   );
// };

// export default MovieGridPage;
