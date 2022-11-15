import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../App';

import Today from './Home/Today';
import Login from './Login/Login';
import Signup from './Signup/Signup';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/search" element={<Signup />} />
      <Route path="/myBook" element={<Signup />} />
    </Routes>
  );
}

export default Router;
