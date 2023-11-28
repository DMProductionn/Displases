import React from 'react';
import './App.css';

import Header from '../Header';
import Category from '../Category';
import BannerSale from '../MainBanner/Sale';
import BannerNewCol from '../MainBanner/NewCol';

function App() {
  return (
    <>
      <Header />
      <div className="wrapper max-w-[1270px] m-auto px-[35px]">
        <Category />
        <div className={`banners flex gap-[30px] justify-center`}>
            <BannerSale />
            <BannerNewCol />
        </div>
      </div>
    </>
  );
}

export default App;
