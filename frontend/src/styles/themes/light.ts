import {DefaultTheme} from 'styled-components';
import CommonTheme from './common';

const LightTheme: DefaultTheme = {
  ...CommonTheme,
  title: 'light',
  colors: {
    ...CommonTheme.colors,
    background: '#fff',
    fontColor: '#333333',
  },
};

export default LightTheme;
