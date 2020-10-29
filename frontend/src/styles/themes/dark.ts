import {DefaultTheme} from 'styled-components';
import CommonTheme from './common';

const DarkTheme: DefaultTheme = {
  ...CommonTheme,
  title: 'dark',
  colors: {
    ...CommonTheme.colors,
    background: '#312E38',
    fontColor: '#fff',
  },
};

export default DarkTheme;
