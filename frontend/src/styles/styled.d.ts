import 'styled-components';

interface TypographyData {
  size: string;
  weight: string | number;
  lineHeight: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    fontFamily: string;
    typography: {
      h1: TypographyData;
      h2: TypographyData;
      h3: TypographyData;
      h4: TypographyData;
      smallBold: TypographyData;
      smallRegular: TypographyData;
      regular: TypographyData;
      button: TypographyData;
      labelRegular: TypographyData;
      labelBold: TypographyData;
      tableBold: TypographyData;
      tableRegular: TypographyData;
      chatMedium: TypographyData;
      bold: TypographyData;
      pillMedium: TypographyData;
    };
    colors: {
      background: string;
      fontColor: string;
      brandPrimary: string;
      brandPrimaryLight: string;
      brandPrimaryLightest: string;
      brandPrimaryDark: string;
      grayDark: string;
      grayDarkest: string;
      grayMedium: string;
      grayLight: string;
      grayLightestOne: string;
      grayDarkestTwo: string;
      grayDarkestThree: string;
      textGray: string;
      textBlack: string;
      textWhite: string;
      textPrimary: string;
      grayBlack: string;
      grayWhite: string;
      alertRed: string;
      alertRed2: string;
      alertRed3: string;
      alertGreen: string;
      alertGreen2: string;
      alertGreen3: string;
    };
  }
}
