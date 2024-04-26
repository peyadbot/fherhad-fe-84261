import { ChakraProvider, Box } from '@chakra-ui/react';
// import './index.css';
import Theme from './Theme';

import Home from './page1/Homepage1';
import ByTheatre from './page2/Homepage2';
import ByTimeslot from './page3/Homepage3';

function App() {
  return (
    <Box w='100vw' bg={'primary.DarkGray'}>
      <ChakraProvider theme={Theme}>
        {/* Uncomment the page that you wanted to see */}
        <Home />
        <ByTheatre />
        {/* <ByTimeslot /> */}
      </ChakraProvider>
    </Box>
  )
}

export default App
