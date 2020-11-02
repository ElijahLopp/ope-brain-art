import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {ToastProvider} from 'react-toast-notifications';
import AppProvider from '~/hooks';
import {ThemeProvider} from '~/hooks/theme';
import Routes from '~/routes';
import GlobalStyle from '~/styles/global';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ToastProvider>
          <AppProvider>
            <Routes />
          </AppProvider>
        </ToastProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
