import React, { createContext, useState } from 'react';
import Header from '../../components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

import TopButton from '../../components/TopButton/TopButton';
import Today from './Today';
import DragCarousel from '../../components/DragCarousel /DragCarousel';

function Home() {
  return (
    <>
      <Header />
      <NavBar />
      <TopButton />
      <Today />
      <Footer />
    </>
  );
}

export default Home;
