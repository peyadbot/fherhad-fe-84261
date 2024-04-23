// import { Box, Image, Badge, Text, Button } from '@chakra-ui/react';

// const MovieCard = ({ title, image, description, views, duration, genre, size }) => {
//   const maxWidth = size === 'lg' ? '600px' : '300px'; //size of the card 
  
//   return (
//     <Box maxW={maxWidth} borderWidth="1px" borderRadius="lg" overflow="hidden">
//       <Image src={image} alt={title} />

//       <Box p="6">
//         <Box d="flex" alignItems="baseline">
//           <Badge borderRadius="full" px="2" colorScheme="teal">
//             New
//           </Badge>
//           <Box
//             color="gray.500"
//             fontWeight="semibold"
//             letterSpacing="wide"
//             fontSize="xs"
//             textTransform="uppercase"
//             ml="2"
//           >
//             {genre}
//           </Box>
//         </Box>

//         <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
//           {title}
//         </Box>

//         <Box>
//           <Text color="gray.500" fontSize="sm">
//             {description}
//           </Text>
//         </Box>

//         <Box d="flex" mt="2" alignItems="center">
//           <Button colorScheme="teal" size="sm">
//             {duration}
//           </Button>
//           <Button ml="2" size="sm">
//             {views}
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };


// export default MovieCard;