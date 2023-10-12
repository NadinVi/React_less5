import { createContext, useCallback, useContext, useMemo, useState } from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('blue');

  const handleChangeTheme = useCallback((event) => {
    setTheme(event.target.checked ? 'pink' : 'blue')
  }, []);

  const value = useMemo(() => {
    return {
      theme,
      onChangeTheme: handleChangeTheme,
    }
  }, [theme, handleChangeTheme])


  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const value = useContext(ThemeContext);
  if (value === null) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return value;
}