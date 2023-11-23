'use client';
import React, { useState } from 'react';
import { RiMenuLine } from 'react-icons/ri';
import { MdOutlineMail } from 'react-icons/md';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    console.log('Toggle Nav Clicked');
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <div className="mx-8 lg:mx-20 flex justify-between py-8 md:py-10">
        <a
          className="hover:scale-105 transition duration-300"
          href="mailto:philkhanasidharth14@gmail.com"
        >
          <div className="flex gap-4 items-center ">
            <MdOutlineMail className="text-2xl" /> Contact
          </div>
        </a>
        <div className="gap-14 hidden lg:flex ">
          <a className="text-[#005AC1]" href="/">
            Home
          </a>
          <a className=" hover:text-[[#005AC1]" href="/form">
            Join
          </a>
          <a className=" hover:text-[[#005AC1]" href="/people">
            People
          </a>
        </div>
        <RiMenuLine
          onClick={toggleNav}
          className="flex lg:hidden w-5 h-5 cursor-pointer"
        />
      </div>

      {isNavOpen && ( // Render the navigation links if isNavOpen is true
        <div className="flex flex-col lg:hidden ">
          <a
            className="text-[#005AC1] m-4"
            href="/"
          >
            Home
          </a>
          <a className=" hover:text-[#005AC1] m-4" href="/form">
            Join
          </a>
          <a className=" hover:text-[#005AC1] m-4" href="/people">
            People
          </a>
        </div>
      )}
    </div>
  );
}
