import { Box, Text, Stack, Button, Input, Flex, Image } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import MarkerSVG from '../assets/marker.svg';

// Component for list headers bold 
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight="bold" fontSize="md" mb="2" color="white">
      {children}
    </Text>
  );
};

const Footer = () => {
  return (
    <Box w="100%" h="560px" bg="other.Gray">
      <Flex h="100%">
        {/* Left side */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="560px"
          bg="secondary.MediumGray"
        >
          {/* Logo and subscription section */}
          <Flex direction="column" w="349px">
            {/* Logo */}
            <Text fontWeight="medium" color="text.White" fontSize="h2" mb="32px">
              PcriMovie
            </Text>
            {/* Description */}
            <Text color="text.Disable" mb="40px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text fontWeight="bold" fontSize="h6" mb="24px" color="text.White">
              Join Newsletters
            </Text>
            {/* Newsletter subscription */}
            <Box position="relative" h="64px" w="282px">
              <Input
                placeholder="Insert your mail here"
                bg="primary.Black"
                border="none"
                color="white"
                pr="60px"
                h="100%"
                focusBorderColor="transparent"
              />
              <Button
                w="48px"
                h="48px"
                bg="secondary.Yellow"
                position="absolute"
                right="10%"
                top="50%"
                transform="translateX(40%) translateY(-50%)"
                p={0}
                zIndex={99}
                _hover={{ 
                  bg: 'secondary.MediumGray',
                  color: 'text.White',
                }} 
              >
                <ArrowForwardIcon />
              </Button>
            </Box>
          </Flex>
        </Box>

        {/* Right side */}
        <Box flex="1" ml="64px" mb="133px" color="text.Disable" maxW="1000px">
          {/* Menu links */}
          <Flex wrap="wrap" mt="133px" mb="99px">
            {/* Product */}
            <Stack spacing="6" flex="0 0 calc(33.333% - 20px)" fontWeight="regular">
              <ListHeader>Product</ListHeader>
              <Box as="a" href="#" fontWeight="regular" _hover={{ color: "secondary.Yellow" }}>
                Movies
              </Box>
              <Box as="a" href="#" fontWeight="regular" _hover={{ color: "secondary.Yellow" }}>
                TV Show
              </Box>
              <Box as="a" href="#" fontWeight="regular" _hover={{ color: "secondary.Yellow" }}>
                Videos
              </Box>
            </Stack>
            {/* Media Group */}
            <Stack spacing="6" flex="0 0 calc(33.333% - 20px)">
              <ListHeader>Media Group</ListHeader>
              <Box as="a" href="#" fontWeight="regular" _hover={{ color: "secondary.Yellow" }}>
                Nice Studio
              </Box>
              <Box as="a" href="#" fontWeight="regular" _hover={{ color: "secondary.Yellow" }}>
                Nice News
              </Box>
              <Box as="a" href="#" fontWeight="regular" _hover={{ color: "secondary.Yellow" }}>
                Nice TV
              </Box>
            </Stack>
            {/* Sitemap */}
            <Stack spacing="6" flex="0 0 calc(33.333% - 20px)">
              <ListHeader>Sitemap</ListHeader>
              <Box as="a" href="#" fontWeight="regular" _hover={{ color: "secondary.Yellow" }}>
                About
              </Box>
              <Box as="a" href="#" fontWeight="regular" _hover={{ color: "secondary.Yellow" }}>
                Careers
              </Box>
              <Box as="a" href="#" fontWeight="regular" _hover={{ color: "secondary.Yellow" }}>
                Press
              </Box>
            </Stack>
          </Flex>
          {/* Contact information */}
          <Flex gap="10" color="white">
            <Flex align="center">
              <Image src={MarkerSVG} alt="Marker" />
              <Text ml="2">8819 Ohio St. South Gate, California 90280</Text>
            </Flex>
            <Flex align="center">
              <EmailIcon />
              <Text ml="2">ourstudio@hello.com</Text>
            </Flex>
            <Flex align="center">
              <PhoneIcon />
              <Text ml="2">+271 386-647-3637</Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
