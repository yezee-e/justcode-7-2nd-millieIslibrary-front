import React from 'react';
<<<<<<< HEAD:src/pages/Router.js
import { Route, Routes } from 'react-router-dom';
import App from '../App';
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Findpw from './Findpw/Findpw';
>>>>>>> origin/Develop:src/pages/Router.jsx

import Today from './Home/Today';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import BookDetail from './BookDetail/BookDetail';

function Router() {
  return (
<<<<<<< HEAD:src/pages/Router.js
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/search" element={<Signup />} />
      <Route path="/myBook" element={<Signup />} />
    </Routes>
=======
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/findpw" element={<Findpw />} />
        <Route path="/bookDetail" element={<BookDetail />} />
      </Routes>
    </BrowserRouter>
>>>>>>> origin/Develop:src/pages/Router.jsx
  );
}

export default Router;
