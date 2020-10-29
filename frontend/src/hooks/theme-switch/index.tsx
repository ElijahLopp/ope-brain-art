import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {DefaultTheme, ThemeProvider} from 'styled-components';
import {getNamePathLocalStorageApp} from '~/config';
import DarkTheme from '~/styles/themes/dark';
import LightTheme from '~/styles/themes/light';
import {ThemeNameEnum} from '~/styles/themes/theme.interfaces';

interface ThemeContextData {
  themeData: DefaultTheme;
  settingTheme(newTheme: ThemeNameEnum): Promise<void>;
}

const pathLocalStorage = getNamePathLocalStorageApp();

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeSwitchProvider: React.FC = ({children}) => {
  const [themeData, setThemeData] = useState(LightTheme);

  useEffect(() => {
    async function loadStorageTheme(): Promise<void> {
      const themeStorage = await localStorage.getItem(
        `${pathLocalStorage}:theme`,
      );
      if (themeStorage) {
        setThemeData(themeStorage === 'dark' ? DarkTheme : LightTheme);
      }
    }
    loadStorageTheme();
  }, []);

  const settingTheme = useCallback(async (newTheme: ThemeNameEnum) => {
    await localStorage.setItem(`${pathLocalStorage}:theme`, newTheme);
    setThemeData(newTheme === 'dark' ? DarkTheme : LightTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{settingTheme, themeData}}>
      <ThemeProvider theme={themeData}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      'ThemeSwitchProvider must be used within a ThemeSwitchProvider',
    );
  }
  return context;
}
export {ThemeSwitchProvider, useTheme};
