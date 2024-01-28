import React, { useEffect } from 'react';
import "../../src/assets/hero.css"
import Aos from 'aos';

export default function Hero() {

    useEffect(() => {
        Aos.init({
            duration: 1500,
        })
    }, [])

    return (
        <>
            <div className='w-100 bg-[#fffafa] bs-height'>
                <div className='w-100 h-[45vh] flex justify-center items-center'>
                    <div className='fram flex justify-center items-center border-anim rounded-[50%] mx-auto' data-aos="fade">
                        <img src="/images/myPhoto-1.jpg" className='photo object-cover rounded-[50%]' alt="" data-aos="zoom-out" />
                    </div>
                </div>
                <div className='text-[#3d4c53] w-100 justify-center mt-3 text-center w-100 px-2'>
                    <p className='font-semibold text-lg' data-aos="fade-up">Hi, I'm Darshit Dhamecha</p>
                    <div className="w-100">
                        <div className='h-[2px] w-[150px] bg-[#3d4c53] mx-auto my-2' data-aos="fade" data-aos-delay="500"></div>
                    </div>
                    <p className='display-3 font-bold' data-aos="fade-up" data-aos-delay="1000">Web Developer</p>
                    <p className='text mt-3' data-aos="fade-up" data-aos-delay="2000">Seeking a role as a front-end developer so I can use my thorough knowledge of programming frameworks and development software.</p>
                    <div className='flex gap-3 mt-4 icons-align justify-center w-100'>
                        <a href='https://github.com/DarshitDhamecha'
                            target="_blank"
                            rel="noopener noreferrer"
                            className='py-1 px-2 border-1 border-[#3d4c53] rounded-[50%] cursor-pointer hover:bg-[#3d4c53] hover:!text-[#fff] duration-200'
                            title='View My Github'
                            data-aos="zoom-in" data-aos-delay="3000">
                            <i class="fa-brands fa-github "></i>
                        </a>
                        <a href='https://www.linkedin.com/in/darshit-dhamecha-b71266278'
                            target='_blank'
                            title='View My LinkedIn'
                            className='py-1 px-2 border-1 border-[#3d4c53] rounded-[50%] cursor-pointer hover:bg-[#3d4c53] hover:!text-[#fff] duration-200'
                            data-aos="zoom-in" data-aos-delay="3000">
                            <i class="fa-brands fa-linkedin-in "></i>
                        </a>
                        <a href='tel:7048416907'
                            target='_blank'
                            rel='noopener noreferrer'
                            title='Contect Me'
                            className='py-1 px-2 border-1 border-[#3d4c53] rounded-[50%] cursor-pointer hover:bg-[#3d4c53] hover:!text-[#fff] duration-200'
                            data-aos="zoom-in" data-aos-delay="3000">
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>
                        <a href='https://www.instagram.com/darshit.444'
                            target='_blank'
                            rel='noopener noreferrer'
                            title='View My Instagram'
                            className='py-1 px-2 border-1 border-[#3d4c53] rounded-[50%] cursor-pointer hover:bg-[#3d4c53] hover:!text-[#fff] duration-200'
                            data-aos="zoom-in" data-aos-delay="3000">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
