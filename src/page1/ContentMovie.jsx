import { Box, Flex, Text, Grid, GridItem } from '@chakra-ui/react';
import { useContext } from 'react';
import { MovieContext } from '../api/MovieContext';
import MovieCard from '../components/MovieCard';

const Content = () => {
  const { movies, loading } = useContext(MovieContext);
  const moviesToShow = movies.slice(0, 5);

  return (
    <div>
      <Box
        justifyContent='center'
        alignItems='center'
        w='100%'
        p={50}
      >
        {/*section */}
        <Flex direction='column' maxW='1500px' mx='auto'>
          {/* Section Title */}
          <Flex
            justify='space-between'
            mb='64px'
            alignItems='center'
          >
            <Text color='text.White' fontSize='h3' fontWeight='bold'>
              New Releases
            </Text>
            {/* View More link */}
            <Text color='text.Yellow' fontSize='h5' fontWeight='bold' _hover={{ cursor: 'pointer', color: 'text.Disable'}}>
              View More
            </Text>
          </Flex>
          
          {/* Movie details */}
          <Grid templateColumns='repeat(3, 1fr)' gap={6}>
            {loading ? (
              <Text color='text.White'>Loading...</Text>
            ) : (
              moviesToShow.map((movie, index) => (
                <GridItem key={movie.imdbID} colSpan={index === 0 ? 2 : 1}>
                  <MovieCard
                    key={movie.imdbID}
                    title={movie.Title}
                    poster={movie.Poster}
                    type={movie.Type}
                  />
                </GridItem>
              ))
            )}
          </Grid>
          
        </Flex>
      </Box>
    </div>
  );
};

export default Content;
