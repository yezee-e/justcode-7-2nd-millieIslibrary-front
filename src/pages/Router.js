import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import BookDetail from './BookDetail/BookDetail';
import Myshelf from './Myshelf/Myshelf';
import Home from './Home/Home';
import Findpw from './Findpw/Findpw';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/findpw" element={<Findpw />} />
      <Route path="/bookDetail" element={<BookDetail />} />
      <Route path="/myshelf" element={<Myshelf />} />
    </Routes>
  );
}

export default Router;
