import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {ToastProvider} from 'react-toast-notifications';
import AppProvider from '~/hooks';
import {ThemeSwitchProvider} from '~/hooks/theme-switch';
import Routes from '~/routes';
import GlobalStyle from '~/styles/global';

const App: React.FC = () => {
  return (
    <ThemeSwitchProvider>
      <BrowserRouter>
        <ToastProvider>
          <AppProvider>
            <Routes />
          </AppProvider>
        </ToastProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeSwitchProvider>
  );
};

export default App;
