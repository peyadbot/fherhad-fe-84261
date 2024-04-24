import { ChakraProvider, Box } from '@chakra-ui/react';
import './index.css';
import Theme from './Theme';



import Header from './components/Header';
import Hero from './components/Hero';
import { MovieProvider } from './api/MovieContext';
import Content from './components/Content';
import Footer from './components/Footer';


function App() {
  return (
    <Box w="100vw" bg={"primary.DarkGray"}>
      <ChakraProvider theme={Theme}>
        <MovieProvider>
          <Header />
          <Hero />
          <Content />
          <Footer />
        </MovieProvider>
      </ChakraProvider>
    </Box>
  )
}

export default App
