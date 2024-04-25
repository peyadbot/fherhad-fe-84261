import { ChakraProvider, Box } from '@chakra-ui/react';
import './index.css';
import Theme from './Theme';



// import Header from './components/Header';
// import { MovieProvider } from './api/MovieContext';
// import { SearchProvider } from './api/SearchContext';
// import Content from './components/Content';
// import Footer from './components/Footer';

//movieprovider
// function App() {
//   return (
//     <Box w="100vw" bg={"primary.DarkGray"}>
//       <ChakraProvider theme={Theme}>
//         <MovieProvider>
//           <Header />
//           <Hero />
//           <Content />
//           <Footer />
//         </MovieProvider>
//       </ChakraProvider>
//     </Box>
//   )
// }

//search
// function App() {
//   return (
//     <Box w="100vw" bg={"primary.DarkGray"}>
//       <ChakraProvider theme={Theme}>
//         <SearchProvider>
//           <Header />
//           {/* <Hero /> */}
//           <Theater />
//           <Content />
//           <Footer />
//         </SearchProvider>
//       </ChakraProvider>
//     </Box>
//   )
// }
// import HomePage1 from './page1/Homepage1';
import HomePage3 from './page3/Homepage3';

function App() {
  return (
    <Box w="100vw" bg={"primary.DarkGray"}>
      <ChakraProvider theme={Theme}>
      {/* <HomePage1 /> */}
        <HomePage3 />
      </ChakraProvider>
    </Box>
  )
}

export default App
