import React from 'react';
import style from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className="bg-[#161616] mt-[50px] px-[15px]">
        <div className='flex place-content-around pt-[30px] pb-[20px] border-b-[1px] border-[#333232]'>
          <ul className='flex flex-col gap-[8px]'>
            <li>PLATFORM</li>
            <li><a href="#">Support</a> </li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Partnerships</a></li>
            <li><a href="#">Blog</a></li>
          </ul>

          <ul className='flex flex-col gap-[8px]'>
            <li>ABOUT US</li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">AML Policy</a></li>
            <li><a href="#">Responsibility</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>

          <ul className='flex flex-col gap-[8px]'>
            <li>COMMUNITY</li>
            <li><a href="#">Telegram</a></li>
            <li><a href="#"> X (Twitter) </a></li>
            <li><a href="#">Discord</a></li>
          </ul>
        </div>

        <div className='pt-[20px] pb-[50px]'>
          <img src="./img/icons/logo/Logo.png" alt="logo" />
        </div>
      </footer>
    </>
  );
}
