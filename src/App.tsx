import React from 'react';
import MainApp from './components/MainApp';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainApp />
    </ThemeProvider>
  );
};

export default App;