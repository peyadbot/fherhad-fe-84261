import { Box, Image, Text, Flex } from '@chakra-ui/react';
import ClockSVG from "../assets/clock.svg";
import EyeSVG from "../assets/eye.svg";

const MovieCard = ({ title, poster, type, duration, views }) => {
  return (
    <Box bg="gray.200" h={"560px"}>
      {/* Main card container */}
      <Box
        bgImage={`url(${poster})`}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        boxShadow="md"
        h="100%"
        position="relative"
      >
        {/* Gradient overlay */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={0}
          bgGradient="linear(to top, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0))"
        ></Box>
        {/* Genre label */}
        <Box
          bg="text.Yellow"
          color="text.Title"
          position="absolute"
          top={2}
          left={4}
          px={4}
          py={1}
          borderRadius="50px"
          fontSize="sm"
          zIndex="1"
        >
          {type}
        </Box>
        
        {/* Movie details */}
        <Box position="absolute" bottom={4} left={4} right={4} color={"white"}>
          <Flex align="center" justify="space-between">
            <Flex align="center" gap={2} color="text.InField">
              {/* Time duration */}
              <Image src={ClockSVG} alt="Clock Icon" boxSize={4} />
              <Text fontSize="sm">1hr 24mins</Text>
              {/* Views */}
              <Image src={EyeSVG} alt="Eye Icon" boxSize={4} />
              <Text fontSize="sm">21.3K views</Text>
            </Flex>
          </Flex>
          {/* Movie title */}
          <Text fontWeight="bold" fontSize="h3" noOfLines={2}  isTruncated whiteSpace="wrap">
            {title}
          </Text>
        </Box>
      </Box>
    </Box>

  );
};

export default MovieCard;



