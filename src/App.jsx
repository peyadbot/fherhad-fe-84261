import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import Theme from './Theme';



import Header from './Header';
import Hero from './Hero';


function App() {
  return (
    <>
      <ChakraProvider theme={Theme}>
        
          <Header />
          <Hero />
        
      </ChakraProvider>
    </>
  )
}

export default App
