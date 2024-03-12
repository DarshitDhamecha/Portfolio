import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../../src/assets/header.css";
import Aos from 'aos';

export default function Header() {

  useEffect(() => {
    Aos.init({
      duration: 1500,
    })
  }, [])

  return (
    <>
      <div className='header-anim bg-[#3d4c53] sticky top-0 z-50 h-[50px] border-b-2 border-[#797979] w-100 flex text-[#fff] items-center responsive'>
        <NavLink to='/' className='header-eff' >HOME</NavLink>
        <NavLink to='/resume' className='header-eff' >RESUME</NavLink>
        <NavLink to='/project' className='header-eff' >PROJECTS</NavLink>
        <NavLink to='/about' className='header-eff' >ABOUT</NavLink>
        <NavLink to='/skills' className='header-eff' >SKILLS</NavLink>
      </div>
    </>
  );
}
