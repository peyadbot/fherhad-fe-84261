import { extendTheme } from '@chakra-ui/react';

const Theme = extendTheme({
  fonts: {
    primary: 'DM Sans', 
  },

  fontWeights: {
    bold: 700,
    medium: 500,
    regular: 400,
  },

  fontSizes: {
    h1: '72px',
    h2: '64px',
    h3: '48px',
    h4: '32px',
    h5: '24px',
    h6: '16px',
  },

  colors: {
    base: {
      Black: '#000000',
      White: '#FFFFFF',
    },
    primary: {
      DarkGray: '#1E1E1E', 
      Black: '#525252', 
    },
    secondary: {
      MediumGray: '#3D3D3D', 
      ShadowGold: '#302D28', 
      Yellow: '#FED530',
    },
    text: {
      Title: '#2E2E2E', 
      Body: '#808080', 
      Yellow: '#FED530',
      InField: '#CCCCCC',
      Disable: '#E6E6E6',
      White: '#FFFFFF',
    },
    other: {
      ImagePlaceholder: '#333333',
      Gray: '#2E2E2E',
    },
  },
});

export default Theme;
