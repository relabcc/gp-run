import React from 'react';
import { Provider } from 'react-redux';

import createStore from './state/createStore';
import Box from './components/Box';
import ThemeProvider from './components/ThemeProvider';

import HomePage from './pages/index';
import PageEnhancer from './PageEnhancer';

const App = () => (
  <Provider store={createStore()}>
    <Box height="100%">
      <ThemeProvider>
        <PageEnhancer>
          <HomePage/ >
        </PageEnhancer>
      </ThemeProvider>
    </Box>
  </Provider>
);

export default App;
