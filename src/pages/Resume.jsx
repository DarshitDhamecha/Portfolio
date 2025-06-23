import React, { useEffect } from 'react'
import "../../src/assets/resume.css"
import Aos from 'aos'

export default function Resume() {
    useEffect(() => {
        Aos.init({
            duration: 1500,
        })
    }, [])
    return (
        <>
            <div className='bg-[#fffafa]'>
                <div className='height px-2 py-3'>
                    <img src="/images/darshit-resume-img.jpg" className='h-100 mx-auto  resume-shadow my-resume' alt="" data-aos="zoom-in" />
                </div>
                <div className='position-fixed bottom-7 right-4'>
                    <a href="/images/darshit_resume.pdf" download="darshit_resume">
                        <button className='border-[#3d4c53] border-1 py-1 px-1 hover:!bg-[#3d4c53] hover:text-[#fff]'>Download</button>
                    </a>
                </div>
            </div>
        </>
    )
}
