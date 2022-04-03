import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
  return (
    <div className='bg-slate-200 p-1'>
      <nav className='font-medium m-4 flex justify-center flex-wrap'>
          <CustomLink className='border-b-2 border-neutral-400 p-3 'to='/'>HOME</CustomLink>
          <CustomLink className='ml-5 border-b-2 border-neutral-400 p-3' to='/reviews'>REVIEWS</CustomLink>
          <CustomLink className='ml-5 border-b-2 border-neutral-400 p-3' to='/dashboard'>DASHBOARD</CustomLink>
          <CustomLink className='ml-5 border-b-2 border-neutral-400 p-3' to='/blogs'>BLOGS</CustomLink>
          <CustomLink className='ml-5 border-b-2 border-neutral-400 p-3' to='/about'>ABOUT</CustomLink>
      </nav>
    </div>
  );
};

export default Header;