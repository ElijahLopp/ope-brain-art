import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {ToastProvider} from 'react-toast-notifications';
import AppProvider from '~/hooks';
import {ThemeProvider} from '~/hooks/theme';
import Routes from '~/routes';
import GlobalStyle from '~/styles/global';
import ToastCustom from './components/molecules/ToastCustom';
import {ToastContainer} from './components/molecules/ToastCustom/styles';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ToastProvider components={{Toast: ToastCustom, ToastContainer}}>
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
