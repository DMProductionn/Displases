import React from 'react';
import BannerNewCol from '../components/MainBanners/NewCol';
import BannerSale from '../components/MainBanners/Sale';
import axios from 'axios';

export default function Home() {

  axios.get('https://65707bc209586eff66417bbf.mockapi.io/item').then(res => {
    console.log(res.data);
  })

  return (
    <div className={`banners flex gap-[30px] justify-center`}>
      <BannerSale />
      <BannerNewCol />
    </div>
  );
}



