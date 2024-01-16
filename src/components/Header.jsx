import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <>
      <div className='bg-[#3d4c53] h-[50px] border-b-2 border-[#797979] w-100 flex text-[#fff] items-center responsive'>
        <Link to='/' className=' header-eff'>HOME</Link>
        <Link to='#' className=' header-eff'>RESUME</Link>
        <Link to='#' className=' header-eff'>PROJECTS</Link>
        <Link to='#' className=' header-eff'>ABOUT</Link>
        <Link to='/skills' className=' header-eff'>SKILLS</Link>
      </div>
    </>
  );
}
