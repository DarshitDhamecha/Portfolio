import React from 'react';

export default function Header() {

  return (
    <>
      <div className='bg-[#3d4c53] h-[50px] border-b-2 border-[#797979] w-100 flex text-[#fff] items-center responsive'>
        <a href='#' className=' header-eff'>HOME</a>
        <a href='#' className=' header-eff'>RESUME</a>
        <a href='#' className=' header-eff'>PROJECTS</a>
        <a href='#' className=' header-eff'>ABOUT</a>
        <a href='#' className=' header-eff'>SKILLS</a>
      </div>
    </>
  );
}
