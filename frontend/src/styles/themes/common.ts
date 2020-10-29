import {DefaultTheme} from 'styled-components';

const CommonTheme: DefaultTheme = {
  title: 'Common',
  fontFamily: 'Montserrat',

  typography: {
    h1: {
      size: '22px',
      weight: 'bold',
      lineHeight: '30px',
    },
    h2: {
      size: '18px',
      weight: 500,
      lineHeight: '26px',
    },
    h3: {
      size: '16px',
      weight: 'bold',
      lineHeight: '22px',
    },
    h4: {
      size: '14px',
      weight: 'bold',
      lineHeight: '18px',
    },
    smallBold: {
      size: '14px',
      weight: 'bold',
      lineHeight: '18px',
    },
    smallRegular: {
      size: '14px',
      weight: 500,
      lineHeight: '18px',
    },
    regular: {
      size: '12px',
      weight: 500,
      lineHeight: '16px',
    },
    button: {
      size: '14px',
      weight: 500,
      lineHeight: '22px',
    },
    labelRegular: {
      size: '12px',
      weight: 500,
      lineHeight: '16px',
    },
    labelBold: {
      size: '12px',
      weight: 'bold',
      lineHeight: '16px',
    },
    tableBold: {
      size: '14px',
      weight: 'bold',
      lineHeight: '18px',
    },
    tableRegular: {
      size: '14px',
      weight: 'normal',
      lineHeight: '18px',
    },
    chatMedium: {
      size: '12px',
      weight: 500,
      lineHeight: '16px',
    },
    bold: {
      size: '12px',
      weight: 'bold',
      lineHeight: '16px',
    },
    pillMedium: {
      size: '10px',
      weight: 500,
      lineHeight: '12px',
    },
  },
  colors: {
    background: '#f7fafc',
    fontColor: '#000',

    // Paleta de cores
    brandPrimary: '#2c5282',
    brandPrimaryLight: '#2b6cb0',
    brandPrimaryLightest: '#18ABDC',
    brandPrimaryDark: '#2a4365',
    grayDark: '#4a5568',
    grayDarkest: '#1a202c',
    grayMedium: '#718096',
    grayLight: '#a0aec0',
    grayLightestOne: '#e2e8f0',
    grayDarkestTwo: '#f7fafc',
    grayDarkestThree: '#EFF4F6',
    textGray: '#a4a4a4',
    textBlack: '#42474a',
    textWhite: '#ffffff',
    textPrimary: '#3F3F3F',
    grayBlack: '#000000',
    grayWhite: '#ffffff',
    alertRed: '#e53e3e',
    alertRed2: '#F56565',
    alertRed3: '#FC8181',
    alertGreen: '#38A169',
    alertGreen2: '#48BB78',
    alertGreen3: '#68D391',
  },
};

export default CommonTheme;
