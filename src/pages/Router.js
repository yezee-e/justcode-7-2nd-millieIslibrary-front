import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import BookDetail from './BookDetail/BookDetail';
import MyShelf from './Myshelf/Myshelf';
import Home from './Home/Home';
import Findpw from './Findpw/Findpw';
import Search from './Search/Search';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/findpw" element={<Findpw />} />
      <Route path="/search" element={<Search />} />
      <Route path="/bookDetail" element={<BookDetail />} />
      <Route path="/myshelf" element={<MyShelf />} />
    </Routes>
  );
}

export default Router;
