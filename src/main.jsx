// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import { ChakraProvider} from '@chakra-ui/react';
// import Theme from './Theme';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ChakraProvider theme={Theme}>
//       <App />
//     </ChakraProvider>
//   </React.StrictMode>,
// )

import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import './index.css';
import Theme from './Theme';
import App from './App.jsx'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
