import React, { createContext, useState } from 'react';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Today from './pages/Home/Today';
import TopButton from './components/TopButton/TopButton';

export const ThemeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(cur => (cur == 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Header toggleTheme={toggleTheme} />
        <NavBar />
        <TopButton />
        <Today />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
