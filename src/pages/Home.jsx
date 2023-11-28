import React from 'react';
import BannerNewCol from '../components/MainBanner/NewCol';
import BannerSale from '../components/MainBanner/Sale';

export default function Home() {
  return (
    <div className={`banners flex gap-[30px] justify-center`}>
      <BannerSale />
      <BannerNewCol />
    </div>
  );
}
