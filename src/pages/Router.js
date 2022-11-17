import React, { createContext, useCallback, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import BookDetail from './BookDetail/BookDetail';
import Home from './Home/Home';
import Findpw from './Findpw/Findpw';

export const ThemeContext = createContext('light');

function Router() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = useCallback(() => {
    setTheme(cur => (cur === 'light' ? 'dark' : 'light'));
  }, [setTheme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <div id={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/findpw" element={<Findpw />} />
          <Route path="/bookDetail" element={<BookDetail />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default Router;
