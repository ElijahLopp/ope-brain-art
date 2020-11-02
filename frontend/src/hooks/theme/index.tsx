import {ThemeProvider as MuiThemeProvider} from '@material-ui/core';
import React from 'react';
import {ThemeProvider as SThemeProvider} from 'styled-components';
import themeMUI from '~/styles/theme.MUI';

const ThemeProvider: React.FC = ({children}) => {
  return (
    <MuiThemeProvider theme={themeMUI}>
      <SThemeProvider theme={themeMUI as any}>{children}</SThemeProvider>
    </MuiThemeProvider>
  );
};

export {ThemeProvider};
