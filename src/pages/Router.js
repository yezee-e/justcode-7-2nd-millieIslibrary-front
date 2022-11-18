import React, { createContext, useCallback, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import BookDetail from './BookDetail/BookDetail';
import Myshelf from './Myshelf/Myshelf';
import Home from './Home/Home';
import Findpw from './Findpw/Findpw';
import Search from './Search/Search';

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
          <Route path="/myshelf" element={<Myshelf />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default Router;
