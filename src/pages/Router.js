import React, { createContext, useCallback, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import BookDetail from './BookDetail/BookDetail';
import Myshelf from './Myshelf/Myshelf';
import Home from './Home/Home';
import PasswordChange from './PasswordChange/PasswordChange';
import Search from './Search/Search';
import Categorydetails from '../components/Categorydetails/Categorydetails';
import Gate from './GatePage/Gate';

export const ThemeContext = createContext('light');

function Router() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = useCallback(() => {
    setTheme(cur => (cur === 'light' ? 'dark' : 'light'));
  }, [setTheme]);

  return (
    <div id={theme}>
      <ThemeContext.Provider value={{ toggleTheme, theme }}>
        <Routes>
          <Route path="/" element={<Gate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pwchange" element={<PasswordChange />} />
          <Route path="/bookDetail/:id" element={<BookDetail />} />
          <Route path="/myshelf" element={<Myshelf />} />
          <Route path="/search" element={<Search />} />
          <Route path="/category/:id" element={<Categorydetails />} />
          {/* <Route path="/categorys/:id" element={<Categorydetails />} /> */}
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default Router;
