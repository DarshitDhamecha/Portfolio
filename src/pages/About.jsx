import React, { useEffect } from 'react'
import "../../src/assets/about.css"
import Aos from 'aos'

export default function About() {
    useEffect(() => {
        Aos.init({
            duration: 1500,
        })
    }, [])
    return (
        <>
            <div data-aos="fade-down">
                <h2 className='fs-3 headding-fonts font-semibold text-[#3d4c53] mt-3 text-center'>About Me</h2>
                <div className='w-100'>
                    <div className='mx-auto h-[1px] mt-1 w-[100px] bg-[#3d4c53]'></div>
                </div>
                <div className='px-3 text-lg mt-3 flex gap-2'>
                    <i class="fa-solid fa-arrow-right mt-1 fs-4"></i>
                    <p className='my-li'>Hello, I'm Darshit Dhamecha, a passionate Frontend Developer with a solid foundation in web technologies. Currently, I am a proud 2nd-year student pursuing my Bachelor's in Computer Applications (B.C.A). In my enriching 5-month internship,  I immersed myself in the dynamic world of web development. This experience allowed me to hone my skills and gain valuable hands-on experience.</p>
                </div>
            </div>
            <div className='w-100 flex flex-col items-center justify-center my-2'>
                <div className='mx-auto h-[60px] w-[1px] bg-[#3d4c53]'></div>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div data-aos="fade-up">
                <h2 className='fs-3 headding-fonts font-semibold text-[#3d4c53] mt-3 text-center'>Skills Overview</h2>
                <div className='w-100'>
                    <div className='mx-auto mt-1 h-[1px] w-[100px] bg-[#3d4c53]'></div>
                </div>
                <div className='px-3 text-lg '>
                    <div className='mt-3 flex gap-2'>
                        <i class="fa-solid fa-arrow-right mt-1 fs-4"></i>
                        <p className='my-li'><span className='font-semibold'>HTML & CSS:</span> Proficient in creating structured, responsive, and visually appealing web pages.</p>
                    </div>
                    <div className='mt-3 flex gap-2'>
                        <i class="fa-solid fa-arrow-right mt-1 fs-4"></i>
                        <p className='my-li'><span className='font-semibold'>Bootstrap & Tailwind CSS:</span> Leveraging popular frontend frameworks to streamline the development process and ensure a seamless user experience.</p>
                    </div>
                    <div className='mt-3 flex gap-2'>
                        <i class="fa-solid fa-arrow-right mt-1 fs-4"></i>
                        <p className='my-li'><span className='font-semibold'>JavaScript & React JS:</span> Leveraging popular Adept at building interactive and dynamic user interfaces with the power of JavaScript and React.</p>
                    </div>
                    <div className='mt-3 flex gap-2'>
                        <i class="fa-solid fa-arrow-right mt-1 fs-4"></i>
                        <p className='my-li'><span className='font-semibold'>Redux:</span>Currently exploring and expanding my knowledge in state management through Redux.</p>
                    </div>
                </div>
            </div>
            <div className='w-100 flex flex-col items-center justify-center my-2'>
                <div className='mx-auto h-[60px] w-[1px] bg-[#3d4c53]'></div>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div data-aos="fade-down">
                <h2 className='fs-3 headding-fonts font-semibold text-[#3d4c53] mt-3 text-center'>My Approach:
                </h2>
                <div className='w-100'>
                    <div className='mx-auto h-[1px] w-[100px] mt-1 bg-[#3d4c53]'></div>
                </div>
                <div className='mt-3 flex gap-2 px-3'>
                    <i class="fa-solid fa-arrow-right mt-1 fs-4"></i>
                    <p>I believe in the power of clean, efficient code and strive to create user-friendly experiences. With a keen eye for design and a commitment to staying updated with the latest industry trends, I am dedicated to delivering high-quality solutions that exceed expectations.</p>
                </div>
            </div>
            <div className='w-100 flex flex-col items-center justify-center my-2'>
                <div className='mx-auto h-[60px] w-[1px] bg-[#3d4c53]'></div>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div data-aos="fade-up">
                <h2 className='fs-3 headding-fonts font-semibold text-[#3d4c53] mt-3 text-center'>Internship Experience:
                </h2>
                <div className='w-100'>
                    <div className='mx-auto h-[1px] w-[150px] mt-1 bg-[#3d4c53]'></div>
                </div>
                <div className='mt-3 flex gap-2 px-3'>
                    <i class="fa-solid fa-arrow-right mt-1 fs-4"></i>
                    <p>During my internship, I had the opportunity to contribute to real-world projects, collaborating with a diverse team and overcoming challenges to deliver successful outcomes. This experience has fueled my passion for crafting exceptional frontend experiences.</p>
                </div>
            </div>
            <div className='w-100 flex flex-col items-center justify-center my-2'>
                <div className='mx-auto h-[60px] w-[1px] bg-[#3d4c53]'></div>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div className='flex gap-2 px-3'>
                <i class="fa-solid fa-arrow-right mt-1 fs-4"></i>
                <p>As I continue to grow and evolve in this ever-evolving field, I am excited about the prospect of taking on new challenges and contributing to innovative projects.</p>
            </div>

            <div className='flex gap-2 px-3'>
                <i class="fa-solid fa-arrow-right mt-1 fs-4"></i>
                <p>Thank you for visiting my portfolio, and feel free to explore my work to get a glimpse of my coding journey!</p>
            </div>
        </>
    )
}
