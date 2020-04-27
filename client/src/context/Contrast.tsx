import * as React from 'react';
import Storage from '../util/storage';
import isBrowser from '../util/isBrowser';

const ContrastContext = React.createContext({
  theme: 'default',
  toggleContrast: () => {},
});

const ContrastProvider: React.FunctionComponent = ({ children }) => {
  const [theme, setTheme] = React.useState('default');

  React.useEffect(() => {
    if (isBrowser()) {
      const storage = new Storage();
      const storageTheme = storage.get('theme');

      if (!!storageTheme) {
        setTheme(storageTheme);
      }
    }
  }, []);

  const themeValue = {
    theme,
    toggleContrast: () => {
      let newTheme = 'default';

      if (theme === 'default') {
        newTheme = 'dark';
      }

      setTheme(newTheme);
      const storage = new Storage();

      storage.set('theme', newTheme);
    },
  };

  return <ContrastContext.Provider value={themeValue}>{children}</ContrastContext.Provider>;
};

export default ContrastProvider;
export { ContrastContext };
