import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Findpw from './Findpw/Findpw';

import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import BookDetail from './BookDetail/BookDetail';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/findpw" element={<Findpw />} />
        <Route path="/bookDetail" element={<BookDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
