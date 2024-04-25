import { ChakraProvider, Box } from '@chakra-ui/react';
// import './index.css';
import Theme from './Theme';

import HomePage1 from './page1/Homepage1';
import HomePage2 from './page2/Homepage2';
import HomePage3 from './page3/Homepage3';

function App() {
  return (
    <Box w='100vw' bg={'primary.DarkGray'}>
      <ChakraProvider theme={Theme}>
        {/* Uncomment the page that you wanted to see */}
        <HomePage1 />
        {/* <HomePage2 /> */}
        {/* <HomePage3 /> */}
      </ChakraProvider>
    </Box>
  )
}

export default App
