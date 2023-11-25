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
      <div className="px-8 md:px-20 lg:px-20 
      flex justify-between py-8  bg-transparent
      
      ">
        <a className={`text-teal-500`} href="/">
            Home
        </a>
        <div className="gap-14 hidden lg:flex ">
          
          <a className=" hover:text-teal-500" href="/form">
            Join
          </a>
          <a className=" hover:text-teal-500" href="/timeline">
            Timeline
          </a>
          <a className=" hover:text-teal-500" href="/people">
            People
          </a>
          <a className=" hover:text-teal-500" href="/FAQs">
            FAQs
          </a>
          <a
          className="hover:scale-105 transition duration-300"
          href="mailto:philkhanasidharth14@gmail.com"
          >Contact
          </a>
        </div>
        <RiMenuLine
          onClick={toggleNav}
          className="flex lg:hidden w-5 h-5 cursor-pointer"
        />
      </div>

      {isNavOpen && ( // Render the navigation links if isNavOpen is true
        <div className="flex flex-col lg:hidden ">
          <a className=" hover:text-teal-500 mx-8 mb-4" href="/form">
            Join
          </a>
          <a className=" hover:text-teal-500" href="/timeline">
            Timeline
          </a>
          <a className=" hover:text-teal-500 mx-8 my-4" href="/people">
            People
          </a>
          <a className=" hover:text-teal-500" href="/FAQs">
            FAQs
          </a>
          <a
          className=" hover:text-teal-500 mx-8 my-4"
          href="mailto:philkhanasidharth14@gmail.com"
          >Contact
          </a>
        </div>
      )}
    </div>
  );
}
