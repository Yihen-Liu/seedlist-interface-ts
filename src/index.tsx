import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';
import "./style/App.scss";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: "Inter",
        body: "Inter",
    },
});

ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
