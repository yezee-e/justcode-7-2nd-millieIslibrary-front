import React, { createContext, useState } from 'react';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Today from './pages/Home/Today';
import './App.scss';

export const ThemeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(cur => (cur == 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Header toggleTheme={toggleTheme} />
        <NavBar />
        <Today />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
