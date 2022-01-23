import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

function getLibrary(provider) {
  return new Web3(provider)
}

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
  </Web3ReactProvider>,
  document.getElementById('root')
);