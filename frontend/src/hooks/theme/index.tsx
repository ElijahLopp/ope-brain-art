import DateFnsUtils from '@date-io/date-fns';
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import ptLocale from 'date-fns/locale/pt-BR';
import React from 'react';
import {ThemeProvider as SThemeProvider} from 'styled-components';
import themeMUI from '~/styles/theme.MUI';

const ThemeProvider: React.FC = ({children}) => {
  return (
    <MuiThemeProvider theme={themeMUI}>
      <SThemeProvider theme={themeMUI as any}>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptLocale}>
          {children}
        </MuiPickersUtilsProvider>
      </SThemeProvider>
    </MuiThemeProvider>
  );
};

export {ThemeProvider};
