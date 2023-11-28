import React from 'react';
import './App.css';

import Header from '../Header';
import Category from '../Category';
import Footer from '../Footer';
import Home from '../../pages/Home';

function App() {
  return (
    <>
      <Header />
      <div className="wrapper max-w-[1270px] m-auto px-[35px]">
        <Category />
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
