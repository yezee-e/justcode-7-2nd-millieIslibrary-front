import React from 'react';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Today from './pages/Home/Today';

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Today />
      <Footer />
    </>
  );
}

export default App;
