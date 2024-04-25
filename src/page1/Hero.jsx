import { Box, Heading, Text, Flex, CircularProgress, Stack } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box bg='primary.DarkGray' w='100%'>
      {/* Hero Section */}
      <Flex h='770px' w='100%' align='center' justify='center' bgGradient='linear(to-r, rgba(255, 255, 255, 0), rgba(0, 0, 0, 1))' bgClip='padding-box'>
        
        {/* Left Section - Circular Progress */}
        <Box flex={1} align='center' justify='center'>
          <Box position='relative' display='inline-block'>
            {/* Outer Circular Progress Ring */}
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
            {/* Yellow Circle in the Center */}
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
            {/* Play Icon */}
            <Box
              position='absolute'
              top='50%'
              left='50%'
              transform='translate(-50%, -50%)'
            >
              <svg width='46' height='46' viewBox='0 0 46 46' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M11.5833 41.7782V4.22119L39.7444 22.9997L11.5833 41.7782ZM15.3889 11.3338V34.6656L32.8944 22.9997L15.3889 11.3338Z' fill='black'/>
              </svg>
            </Box>
          </Box>
        </Box>

        {/* Right Section - Text Content */}
        <Box flex={1} align='left' justify='center'>
          <Stack spacing={6} w='600px'>
            <Heading fontSize='h1' fontWeight='bold' textAlign='left' color='text.White'>
              <Text>Find Your Movie <br /> Here!</Text>
            </Heading>
            <Text fontWeight='regular' color='text.Disable' textAlign='left'> 
              Explore our gallery full of exciting films from all around the globe for your entertainment. No hidden charges or disturbing ads.
            </Text>
          </Stack>
        </Box>

      </Flex>
    </Box>
  );
};

export default Hero;
