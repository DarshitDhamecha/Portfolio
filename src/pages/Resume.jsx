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
                    <img src="/images/myresume.jpg" className='h-100 mx-auto  resume-shadow' alt="" data-aos="zoom-in" />
                </div>
                <div className='position-fixed bottom-7 right-7'>
                    <a href="/images/myresume.jpg" download="Darshit_Dhamecha_CV">
                        <button className='border-[#3d4c53] border-1 py-1 px-3 hover:!bg-[#3d4c53] hover:text-[#fff]'>Download</button>
                    </a>
                </div>
            </div>
        </>
    )
}
