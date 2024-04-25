import { Box, Flex, Text, Grid, GridItem } from "@chakra-ui/react";
import { useContext } from 'react';
import { SearchContext } from '../api/SearchContext';
import MovieCard from '../components/MovieCard';

const Content = () => {
  const { movies, loading, error } = useContext(SearchContext);

  return (
    <div>
      <Box
        justifyContent="center"
        alignItems="center"
        w="100%"
        p={50}
      >
        {/*section */}
        <Flex direction="column" maxW="1500px" mx="auto">
          {/* Section Title */}
          <Flex
            justify={"space-between"}
            mb={"64px"}
            alignItems={"center"}
          >
            <Text color={"text.White"} fontSize={"h3"} fontWeight={"bold"}>
              Search Results
            </Text>
          </Flex>

          {error && (
            <Text color="red" fontSize={"h5"}>
              {error}
            </Text>
          )}
          
          {/* Movie details */}
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {loading ? (
              <Text color={"text.White"} fontSize={"h5"}>Loading...</Text>
            ) : (
              movies.map((movie) => (
                <GridItem key={movie.imdbID}>
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
