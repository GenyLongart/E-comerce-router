import React from 'react';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Nabvar';
import Contact from './pages/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/detail' element={<Detail />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/' element={<Home />} />
        </Routes>

      </BrowserRouter>
      <Footer />

    </>

  )
}

export default Layout