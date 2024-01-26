import React from 'react'
import "../../src/assets/resume.css"

export default function Resume() {
    return (
        <>
            <div className='height px-2'>
                <img src="/images/myresume.jpg" className='h-100 mx-auto mt-3 resume-shadow' alt="" />
            </div>
            <div className='position-fixed bottom-7 right-7'>
                <a href="/images/myresume.jpg" download="Darshit_Dhamecha_CV">
                    <button className='border-[#3d4c53] border-1 py-1 px-3 text- hover:bg-      [#3d4c53] hover:text-[#fff]'>Download</button>
                </a>
            </div>
        </>
    )
}
