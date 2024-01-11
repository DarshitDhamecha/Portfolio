import React from 'react'

export default function Header() {
    return (
        <>
            <div className='text-white w-100 px-3 h-[65px] flex justify-between items-center header-bg sticky top-0'>
                <div>
                    <p className='fs-3'>Darshit Dhamecha</p>
                </div>
                <div className='flex gap-4'>
                    <a href='#home' className='text- header-eff'>HOME</a>
                    <a href='#about' className='text- header-eff'>ABOUT</a>
                    <a href='#resume' className='text- header-eff'>RESUME</a>
                    <a href='#' className='text- header-eff'>SKILLS</a>
                    <a href='#' className='text- header-eff'>CONTECT</a>
                </div>
            </div>
        </>
    )
}
