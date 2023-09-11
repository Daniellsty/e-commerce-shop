import React from 'react';
import "./Footer.scss";
import {  NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer bg-orange'>
      <div className = "container py-4 text-center">
        <div className='flex align-center justify-center text-white fw-3 fs-14'>
          <NavLink to = "/" className='text-uppercase'>privacy policy</NavLink>
          <div className='vert-line'></div>
          <NavLink to = "/" className='text-uppercase'>term of service</NavLink>
          <div className='vert-line'></div>
          <NavLink to = "/" className='text-uppercase'>About SnapUp.</NavLink>
        </div>
        <span className='text-white copyright-text text-manrope fs-14 fw-3'>&copy; 2022 SnapUp. All Rights Reserved.</span>
      </div>
    </footer>
  )
}

export default Footer