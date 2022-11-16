import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Findpw from './Findpw/Findpw';

import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/findpw" element={<Findpw />} />
    </Routes>
  );
}

export default Router;
