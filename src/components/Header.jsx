import { Flex, Box, Text, Image } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'
import searchLogo from '../assets/search.svg';

const Header = () => {

  // Custom component for navigation links with hover effects
  const FloatingLink = ({ href, children }) => {
    return (
      <Box
        as="a"
        href={href}
        position="relative"
        display="inline-block"
        color="text.Disable" 
        fontWeight="regular"
        mr={{ base: 0, md: "48px" }}
        _hover={{
          color: "text.White",
          fontWeight: "bold",
          _before: {
            content: '""',
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            height: "3px",
            backgroundColor: "text.Yellow",
            transform: "translateY(10px)", //underline position
          },
          transform: "translateY(-10px)" //text float 
        }}
      >
        {children}
      </Box>
    );
  };

  return (
    <Box bg={'primary.DarkGray'}>
      <Flex
        as="header"
        align="center"
        justify="space-between"
        color="white"
        p={4}
        direction={{ base: 'column', md: 'row' }}
        wrap="wrap"
        fontFamily={'fonts.primary'}
        bgClip="padding-box"
        width="100%"
        zIndex="999"
        position="absolute"
      >
        {/* Logo */}
        <Box ml={'103px'}>
          <Text fontWeight="bold" fontSize="h4">PcriMovie</Text>
        </Box>

        {/* Navigation Links */}
        <Box fontWeight="regular" display="flex">
          <FloatingLink href="#">Movie</FloatingLink>
          <FloatingLink href="#">TV Show</FloatingLink>
          <FloatingLink href="#">Video</FloatingLink>
          <FloatingLink href="#">FAQ</FloatingLink>
          <FloatingLink href="#">Pricing</FloatingLink>
          <FloatingLink href="#">Contact</FloatingLink>
        </Box>

        <Flex align="center">
          {/* Search Logo */}
          {/* <Box mr={'48px'}>
            <Image src={searchLogo} alt="Search Logo" />
          </Box> */}
          <SearchIcon 
            mr={'48px'} 
            boxSize={6} 
            _hover={{
              color: "text.Yellow",
              cursor: 'pointer'
            }}
            />

          {/* Profile Picture */}
          <Box borderRadius="full" bg="primary.DarkGray" boxSize={14} mr={'16px'}></Box>
          
          {/* Name */}
          <Text color="white" fontSize="h6" fontWeight="bold" mr={'103px'} _hover={{color: "text.Yellow", cursor: 'pointer'}}>John Doe</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
