import { useState, useEffect } from 'react';

import './App.css';
import Card from './components/Card';
import ThemeBtn from './components/ThemeBtn';
import { ThemeProvider } from './context/Theme';

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const darkTheme = () => {
    setThemeMode('dark');
  };

  const lightTheme = () => {
    setThemeMode('light');
  };

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.toggle(themeMode);
    // TODO improve the logic for context
    // document.querySelector('html').classList.toggle('dark');
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex justify-center items-center h-screen">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
