import React, { useEffect } from 'react'
import "../../src/assets/project.css"
import Aos, { init } from 'aos'

export default function Project() {

    useEffect(() => {
        Aos.init({
            duration: 1500,
        })
    }, [])

    return (
        <>
            <div className='bg-[#fffafa]'>

                <div className='flex gap-3 px-3 mt-3 my-wraper'>
                    <div className='project-tmt  my-flex-gro' data-aos="zoom-in">
                        <div className='product-2-bg py-3 px-3 text-[#fff]'>
                            <h2 className='fs-3 mt-2'>Utkarsh TMT</h2>
                            <h3 className='fs-5 mt-2'>Technology: Wordpress</h3>
                            {/* <p className='mt-3 '>🚀 I recently design an e-commerce clothing website featuring seamless navigation and captivating animations. Leveraging React.JS, HTML, CSS, Bootstrap, and Tailwind CSS, I ensured a responsive, visually appealing experience</p> */}
                            <a href="https://aryagroup.co.in/"
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                <button className='mt-3 border-white border-1 px-3 py-1 text-lg hover:bg-[#fff] hover:!text-black'>
                                    View
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='project-gag my-flex-gro' data-aos="zoom-in">
                        <div className='product-2-bg py-3 px-3 text-[#fff]'>
                            <h2 className='fs-3 mt-2'>Go Abroad guru</h2>
                            <h3 className='fs-5 mt-2'>Technology: Wordpress</h3>
                            {/* <p className='mt-3'>🍽️ I recently design an Restaurant Website featuring seamless navigation and captivating animations. Leveraging React.JS, HTML, CSS, Bootstrap, and Tailwind CSS, I ensured a responsive, visually appealing experience</p> */}
                            <a href="https://goabroadguru.com/"
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                <button className='mt-3 border-white border-1 px-3 py-1 text-lg hover:bg-[#fff] hover:!text-black'>
                                    View
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='project-strella  my-flex-gro' data-aos="zoom-in">
                        <div className='product-2-bg py-3 px-3 text-[#fff]'>
                            <h2 className='fs-3 mt-2'>Strellapa</h2>
                            <h3 className='fs-5 mt-2'>Technology: Wordpress</h3>
                            {/* <p className='mt-3'>🌦️☀️ I recently design an Beauty Product Website featuring seamless navigation and captivating animations. Leveraging React.JS, HTML, CSS, Bootstrap, and Tailwind CSS, I ensured a responsive, visually appealing experience</p> */}
                            <a href="https://strellapa.com/"
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                <button className='mt-3 border-white border-1 px-3 py-1 text-lg hover:bg-[#fff] hover:!text-black'>
                                    View
                                </button>
                            </a>
                        </div>
                    </div>
                </div>


                <div className='flex gap-3 px-3 mt-3 my-wraper'>
                    <div className='project-paras  my-flex-gro' data-aos="zoom-in">
                        <div className='product-2-bg py-3 px-3 text-[#fff]'>
                            <h2 className='fs-3 mt-2'>Paras Print Pack</h2>
                            <h3 className='fs-5 mt-2'>Technology: Wordpress</h3>
                            {/* <p className='mt-3 '>🚀 I recently design an e-commerce clothing website featuring seamless navigation and captivating animations. Leveraging React.JS, HTML, CSS, Bootstrap, and Tailwind CSS, I ensured a responsive, visually appealing experience</p> */}
                            <a href="https://parasprintpack.rajasvidecor.com/"
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                <button className='mt-3 border-white border-1 px-3 py-1 text-lg hover:bg-[#fff] hover:!text-black'>
                                    View
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='project-plata my-flex-gro' data-aos="zoom-in">
                        <div className='product-2-bg py-3 px-3 text-[#fff]'>
                            <h2 className='fs-3 mt-2'>Plataa</h2>
                            <h3 className='fs-5 mt-2'>Technology: Shopify</h3>
                            {/* <p className='mt-3'>🍽️ I recently design an Restaurant Website featuring seamless navigation and captivating animations. Leveraging React.JS, HTML, CSS, Bootstrap, and Tailwind CSS, I ensured a responsive, visually appealing experience</p> */}
                            <a href="https://plataa.co/"
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                <button className='mt-3 border-white border-1 px-3 py-1 text-lg hover:bg-[#fff] hover:!text-black'>
                                    View
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='project-akansha  my-flex-gro' data-aos="zoom-in">
                        <div className='product-2-bg py-3 px-3 text-[#fff]'>
                            <h2 className='fs-3 mt-2'>Akanksha</h2>
                            <h3 className='fs-5 mt-2'>Technology: shopify | Password: akansha</h3>
                            {/* <p className='mt-3'>🌦️☀️ I recently design an Beauty Product Website featuring seamless navigation and captivating animations. Leveraging React.JS, HTML, CSS, Bootstrap, and Tailwind CSS, I ensured a responsive, visually appealing experience</p> */}
                            <a href="https://akansha-hardwares.myshopify.com/"
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                <button className='mt-3 border-white border-1 px-3 py-1 text-lg hover:bg-[#fff] hover:!text-black'>
                                    View
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='flex gap-3 px-3 mt-3 my-wraper'>
                    <div className='project-4  my-flex-gro' data-aos="zoom-in">
                        <div className='product-2-bg py-3 px-3 text-[#fff]'>
                            <h2 className='fs-3 mt-2'>Clothing Website</h2>
                            <h3 className='fs-5 mt-2'>Technology: React.js</h3>
                            {/* <p className='mt-3 '>🚀 I recently design an e-commerce clothing website featuring seamless navigation and captivating animations. Leveraging React.JS, HTML, CSS, Bootstrap, and Tailwind CSS, I ensured a responsive, visually appealing experience</p> */}
                            <a href="https://e-commerce-clothing-darshit.netlify.app"
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                <button className='mt-3 border-white border-1 px-3 py-1 text-lg hover:bg-[#fff] hover:!text-black'>
                                    View
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='project-5 my-flex-gro' data-aos="zoom-in">
                        <div className='product-2-bg py-3 px-3 text-[#fff]'>
                            <h2 className='fs-3 mt-2'>Restaurant Website</h2>
                            <h3 className='fs-5 mt-2'>Technology: React.js</h3>
                            {/* <p className='mt-3'>🍽️ I recently design an Restaurant Website featuring seamless navigation and captivating animations. Leveraging React.JS, HTML, CSS, Bootstrap, and Tailwind CSS, I ensured a responsive, visually appealing experience</p> */}
                            <a href="https://restaurantwebsite-darshit.netlify.app"
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                <button className='mt-3 border-white border-1 px-3 py-1 text-lg hover:bg-[#fff] hover:!text-black'>
                                    View
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='project-7  my-flex-gro' data-aos="zoom-in">
                        <div className='product-2-bg py-3 px-3 text-[#fff]'>
                            <h2 className='fs-3 mt-2'>Beauty Product Website</h2>
                            <h3 className='fs-5 mt-2'>Technology: React.js</h3>
                            {/* <p className='mt-3'>🌦️☀️ I recently design an Beauty Product Website featuring seamless navigation and captivating animations. Leveraging React.JS, HTML, CSS, Bootstrap, and Tailwind CSS, I ensured a responsive, visually appealing experience</p> */}
                            <a href="https://beautyproducts-darshit.netlify.app"
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                <button className='mt-3 border-white border-1 px-3 py-1 text-lg hover:bg-[#fff] hover:!text-black'>
                                    View
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex gap-3 px-3 pt-3 my-wraper'>
                    <div className='project-1  my-flex-gro' data-aos="zoom-in">
                        <div className='product-bg py-3 px-3 text-[#fff]'>
                            <h2 className='fs-3 mt-2'>Login & SignIn Forms</h2>
                            <h3 className='fs-5 mt-2'>Technology: React.js</h3>
                            {/* <p className='mt-3'>🖋️🔐 I developed a fully functional Login / SignIn form using React.js The system incorporates robust validation to enhance security and user experience.</p> */}
                            <a href="https://loginform-darshit.netlify.app/"
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                <button className='mt-3 border-white border-1 px-3 py-1 text-lg hover:bg-[#fff] hover:!text-black'>
                                    View
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='project-2 my-flex-gro' data-aos="zoom-in">
                        <div className='product-2-bg py-3 px-3 text-[#fff]' >
                            <h2 className='fs-3 mt-2'>ToDo-List</h2>
                            <h3 className='fs-5 mt-2'>Technology: React.js</h3>
                            {/* <p className='mt-3'>📝🚀 I developed a ToDo-List app using react.js which provides many features such as user can Add, Edit and Delete tasks like other more feature .</p> */}
                            <a href="https://todolist-darshit.netlify.app"
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                <button className='mt-3 border-white border-1 px-3 py-1 text-lg hover:bg-[#fff] hover:!text-black'>
                                    View
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='project-3 my-flex-gro' data-aos="zoom-in">
                        <div className='product-2-bg py-3 px-3 text-[#fff]'>
                            <h2 className='fs-3 mt-2'>Text-Editor</h2>
                            <h3 className='fs-5 mt-2'>Technology: React.js</h3>
                            {/* <p className='mt-3'>I developed Text-Editor using react.js which provides many features such as Cnovert Lowercase/Uppercase, Copy-Text, Text-Preview Word-Counting etc .</p> */}
                            <a href="https://texteditor-darshit.netlify.app"
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                <button className='mt-3 border-white border-1 px-3 py-1 text-lg hover:bg-[#fff] hover:!text-black'>
                                    View
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='flex gap-3 px-3 my-3 my-wraper'>
                    <div className='project-6 my-flex-gro' data-aos="zoom-in">
                        <div className='product-bg py-3 px-3 text-[#fff]'>
                            <h2 className='fs-3 mt-2'>Weather-App</h2>
                            <h3 className='fs-5 mt-2'>Technology: HTML, CSS, JavaScript</h3>
                            {/* <p className='mt-3'> Just completed a fully functional weather app using HTML, CSS, and JavaScript. This project not only showcases my skills in front-end development but also provides users with real-time weather updates. The clean and intuitive interface ensures a seamless experience, allowing users to stay informed about the weather with ease.</p> */}
                            <a href="https://weatherapp-darshit.netlify.app"
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                <button className='mt-3 border-white border-1 px-3 py-1 text-lg hover:bg-[#fff] hover:!text-black'>
                                    View
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='project-8 my-flex-gro' data-aos="zoom-in">
                        <div className='product-2-bg py-3 px-3 text-[#fff]'>
                            <h2 className='fs-4 mt-2'>Currency Converter</h2>
                            <h3 className='fs-5 mt-2'>Technology: HTML, CSS, JavaScript</h3>
                            {/* <p className='mt-3'>Just launched a fully functional currency converter using HTML, CSS, and JavaScript. This project showcases my expertise in front-end development and provides users with a seamless tool for real-time currency conversion. The intuitive design ensures a user-friendly experience, making it easy for anyone to navigate and use.</p> */}
                            <a href="https://currencyconverter-darshit.netlify.app/"
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                <button className='mt-3 border-white border-1 px-3 py-1 text-lg hover:bg-[#fff] hover:!text-black'>
                                    View
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
