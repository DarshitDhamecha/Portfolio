import React from 'react';

export default function Hero() {
    return (
        <>
            <div className='w-100 flex items-center justify-center gap-5 bs-height'>
                <div className='text-[#3d4c53]'>
                    <p className='font-semibold text-lg'>Hi, I'm Darshit Dhamecha</p>
                    <p className='display-3 font-bold my-2'>Web Developer</p>
                    <p className='w-75'>Seeking a role as a front-end developer so I can use my thorough knowledge of programming frameworks and development software.</p>
                    <div className='flex gap-3 mt-3'>
                        <a href='https://github.com/DarshitDhamecha'
                            target="_blank"
                            rel="noopener noreferrer"
                            className='py-1 px-2 border-1 border-[#3d4c53] rounded-[50%] cursor-pointer hover:bg-[#3d4c53] hover:!text-[#fff] duration-200'
                            title='View My Github'>
                            <i class="fa-brands fa-github "></i>
                        </a>
                        <a href='#'
                            title='View My LinkedIn'
                            className='py-1 px-2 border-1 border-[#3d4c53] rounded-[50%] cursor-pointer hover:bg-[#3d4c53] hover:!text-[#fff] duration-200'>
                            <i class="fa-brands fa-linkedin-in "></i>
                        </a>
                        <a href='tel:7048416907'
                            target='_blank'
                            rel='noopener noreferrer'
                            title='Contect Me'
                            className='py-1 px-2 border-1 border-[#3d4c53] rounded-[50%] cursor-pointer hover:bg-[#3d4c53] hover:!text-[#fff] duration-200'>
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>
                        <a href='https://www.instagram.com/darshit.444'
                            target='_blank'
                            rel='noopener noreferrer'
                            title='View My Instagram'
                            className='py-1 px-2 border-1 border-[#3d4c53] rounded-[50%] cursor-pointer hover:bg-[#3d4c53] hover:!text-[#fff] duration-200'>
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
