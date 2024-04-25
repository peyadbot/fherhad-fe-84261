import {
  Box,
  Text,
  Flex,
  CircularProgress,
  Stack,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { SearchIcon, CalendarIcon } from '@chakra-ui/icons'

import { SearchContext } from '../api/SearchContext';
import { useContext, useState } from 'react';

const ByTheater = () => {

  const { setSearchQuery } = useContext(SearchContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setSearchQuery(searchTerm); // Pass searchTerm to context
    setIsClicked(!isClicked);
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  
  return (
    <Box bg='primary.DarkGray'>
      <Flex
        h='770px'
        w='100%'
        align='center'
        justify='center'
        bgGradient='linear(to-r, rgba(255, 255, 255, 0), rgba(0, 0, 0, 1))'
        bgClip='padding-box'
      >
        {/* Left Section */}
        <Box flex={1} align='center' justify='center'>
          <Box position='relative' display='inline-block'>
            {/* Outer CircularRing */}
            <CircularProgress
              value={72}
              color='secondary.Yellow'
              size='274px'
              transform='translate(-50%, -50%)'
              thickness='1px'
              trackColor='text.Body'
              capIsRound
              style={{ transform: 'rotate(80deg)' }}
            />
            {/* Yellow circle in the center */}
            <Box
              position='absolute'
              top='50%'
              left='50%'
              transform='translate(-50%, -50%)'
              w='121px'
              h='121px'
              borderRadius='50%'
              bg='secondary.Yellow'
            />
            <Box
              position='absolute'
              top='50%'
              left='50%'
              transform='translate(-50%, -50%)'
            >
              <svg
                width='46'
                height='46'
                viewBox='0 0 46 46'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.5833 41.7782V4.22119L39.7444 22.9997L11.5833 41.7782ZM15.3889 11.3338V34.6656L32.8944 22.9997L15.3889 11.3338Z'
                  fill='black'
                />
              </svg>
            </Box>
          </Box>
        </Box>

        {/* Right Section */}
        <Box flex={1} align='left' justify='center' mr={10}>
          <Stack spacing={6} maxW='600px'>
            <Text
              fontSize='h3'
              fontWeight='bold'
              textAlign='left'
              color='text.White'
              whiteSpace='wrap'
            >
              Search your movies here!
            </Text>

            {/* input section */}
            <Flex gap={4} align='center'>
              <InputGroup h='54px' flex='2'>
                <InputLeftElement alingn='center' h='100%'>
                  <SearchIcon color='black' />
                </InputLeftElement>
                <Input 
                  type='text' 
                  placeholder='Enter movie title...' 
                  value={searchTerm} 
                  onChange={handleChange}
                  background='white'
                  color='black' 
                  borderRadius='40px'
                  h='100%'
                  focusBorderColor='transparent'
                  onKeyDown={handleEnterKeyPress} 
                  />
              </InputGroup>
              <InputGroup h='54px' flex='1'>
                <InputLeftElement pointerEvents='none' alingn='center' h='100%'>
                  <CalendarIcon color='black' />
                </InputLeftElement>
                <Input 
                  type='text' 
                  placeholder='27/02/2024' 
                  background='white'
                  color='black' 
                  borderRadius='40px'
                  h='100%'
                  focusBorderColor='transparent'
                  />
              </InputGroup>
            </Flex>

            <Button
              borderRadius='27px'
              border='none'
              width='161px'
              height='54px'
              fontWeight='bold' fontSize='21px'
              background='#FED530'
              _hover={{ 
                bg: 'secondary.MediumGray',
                color: 'text.White',
              }} 
              onClick={handleSearch}
            >
              Search
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default ByTheater;
