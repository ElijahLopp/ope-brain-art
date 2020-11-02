import {Theme} from '@material-ui/core';
import 'styled-components';

interface TypographyData {
  size: string;
  weight: string | number;
  lineHeight: string;
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    title: string;
    fontFamily: string;
  }
}
