import Aos from 'aos'
import React, { useEffect } from 'react'

export default function Skills() {
    useEffect(() => {
        Aos.init({
            duration: 1500,
        })
    }, [])
    return (
        <>
            <div className='bg-[#fffafa]'>
                <div className='pt-3'>
                    <h2 className='fs-3 text-center mt- font-semibold text-[#3d4c53] headding-fonts'>&lt; My Competence &gt;</h2>
                </div>
                <div className='w-100 mt-2'>
                    <div className='mx-auto h-[2px] w-[125px] bg-[#3d4c53]'></div>
                </div>
                <div className='w-100 flex px-3 gap-3 flex-wrap my-4 justify-center items-center'>
                    <a href="#html" className='py-2 px-3 text-[#fff] bg-[#3d4c53]' data-aos="zoom-in">HTML</a>
                    <a href="#css" className='py-2 px-3 text-[#fff] bg-[#3d4c53]' data-aos="zoom-in">CSS</a>
                    <a href="#css" className='py-2 px-3 text-[#fff] bg-[#3d4c53]' data-aos="zoom-in">Bootstrap</a>
                    <a href="#css" className='py-2 px-3 text-[#fff] bg-[#3d4c53]' data-aos="zoom-in">Tailwind Css</a>
                    <a href="#javascript" className='py-2 px-3 text-[#fff] bg-[#3d4c53]' data-aos="zoom-in">JavaScript</a>
                    <a href="#react" className='py-2 px-3 text-[#fff] bg-[#3d4c53]' data-aos="zoom-in">React js</a>
                    <a href="#redux" className='py-2 px-3 text-[#fff] bg-[#3d4c53]' data-aos="zoom-in">Redux</a>
                    <a href="#git&github" className='py-2 px-3 text-[#fff] bg-[#3d4c53]' data-aos="zoom-in">Git</a>
                    <a href="#git&github" className='py-2 px-3 text-[#fff] bg-[#3d4c53]' data-aos="zoom-in">Github</a>
                </div>
                <div className='w-100 px-3'>
                    <div id='html' data-aos="fade-up">
                        <h2 className='fs-3 font-semibold text-[#3d4c53] mt-3 text-center'>HTML</h2>
                        <div className='w-100'>
                            <div className='mx-auto h-[1px] mt-1 w-[100px] bg-[#3d4c53]'></div>
                        </div>
                        <ul className='mx-3 mt-3'>
                            <li className='list-disc'>Proficient in writing clean, semantic HTML5 markup.</li>
                            <hr className='my-1' />
                            <li className='list-disc'>Experience in creating responsive and mobile-friendly web pages using HTML and CSS.</li>
                            <hr className='my-1' />
                            <li className='list-disc'>Deep understanding of HTML document structure and the use of various tags.</li>
                            <hr className='my-1' />
                            <li className='list-disc'>Familiarity with HTML forms, input validation, and integration with server-side processing.</li>
                            <hr className='my-1' />
                            <li className='list-disc'>Experience with the integration of multimedia elements, such as images, audio, and video, using HTML.</li>
                            <hr className='my-1' />
                            <li className='list-disc'>Understanding of HTML5 features, including canvas, local storage, and web sockets.</li>
                        </ul>
                    </div>
                    <div className='w-100 flex flex-col items-center justify-center my-2'>
                        <div className='mx-auto h-[60px] w-[2px] bg-[#3d4c53]'></div>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <div id='css' data-aos="fade-down">
                        <h2 className='fs-3 font-semibold text-[#3d4c53] mt-3 text-center'>CSS, Bootstrap, & TailwindCSS</h2>
                        <div className='w-100'>
                            <div className='mx-auto h-[1px] mt-2 w-[150px] bg-[#3d4c53]'></div>
                        </div>
                        <ul className='mx-3 mt-3'>
                            <li className='list-disc'><strong>CSS:</strong> Proficient in writing clean, modular CSS code to create visually appealing and user-friendly designs. Strong understanding of CSS3 features, including flexbox and grid, to build responsive layouts.</li>
                            <hr className='my-2' />
                            <li className='list-disc'><strong>Bootstrap:</strong> Extensive experience in leveraging Bootstrap to streamline the development process. Skilled in utilizing Bootstrap components and utilities to create consistent and responsive web designs.</li>
                            <hr className='my-2' />
                            <li className='list-disc'><strong>Tailwind CSS:</strong> Proficient in using Tailwind CSS for utility-first and highly customizable styling. Experience in building efficient and maintainable stylesheets with Tailwind's utility classes.</li>
                            <hr className='my-2' />
                            <li className='list-disc'><strong>Responsive Design:</strong> Skilled in implementing responsive design principles across various screen sizes and devices for a consistent and user-friendly experience.</li>
                        </ul>
                    </div>
                    <div className='w-100 flex flex-col items-center justify-center my-2'>
                        <div className='mx-auto h-[60px] w-[2px] bg-[#3d4c53]'></div>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <div id='javascript' data-aos="fade-up">
                        <h2 className='fs-3 font-semibold text-[#3d4c53] mt-3 text-center'>JavaScript</h2>
                        <div className='w-100'>
                            <div className='mx-auto h-[1px] mt-2 w-[100px] bg-[#3d4c53]'></div>
                        </div>
                        <ul className='mx-3 mt-3'>
                            <li className='list-disc'><strong>Proficient in JavaScript:</strong> Demonstrated expertise in writing clean, efficient, and modular JavaScript code.</li>
                            <hr className='my-2' />
                            <li className='list-disc'><strong>Frontend Development:</strong>  experience in frontend development, utilizing JavaScript to create dynamic and interactive user interfaces.</li>
                            <hr className='my-2' />
                            <li className='list-disc'><strong>ES6+ Features:</strong> knowledge and application of modern JavaScript features, including arrow functions, destructuring, and async/await.</li>
                            <hr className='my-2' />
                            <li className='list-disc'><strong>DOM Manipulation:</strong> Expertise in manipulating the Document Object Model (DOM) for dynamic and responsive user interfaces.</li>
                            <hr className='my-2' />
                            <li className='list-disc'><strong>Event-Driven Programming:</strong> Skilled in handling user events and creating interactive applications through event-driven programming.</li>
                            <hr className='my-2' />
                            <li className='list-disc'><strong>Continuous Learning:</strong> Proactive in staying updated with the latest JavaScript advancements, frameworks, and best practices to enhance frontend development skills.</li>
                        </ul>
                    </div>
                    <div className='w-100 flex flex-col items-center justify-center my-2'>
                        <div className='mx-auto h-[60px] w-[2px] bg-[#3d4c53]'></div>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <div id='react' data-aos="fade-down">
                        <h2 className='fs-3 font-semibold text-[#3d4c53] mt-3 text-center'>React.js</h2>
                        <div className='w-100'>
                            <div className='mx-auto h-[1px] mt-2 w-[100px] bg-[#3d4c53]'></div>
                        </div>
                        <ul className='mx-3 mt-3'>
                            <li className='list-disc'><strong>Component-Based Development:</strong> Expertise in building scalable and reusable UI components following React's component-based architecture.</li>
                            <hr className='my-2' />
                            <li className='list-disc'><strong>React Hooks:</strong> In-depth knowledge and practical application of React Hooks for managing state, side effects, and other functionalities in functional components.</li>
                            <hr className='my-2' />
                            <li className='list-disc'><strong>React Router:</strong> Experience in implementing client-side routing using React Router for seamless navigation in single-page applications.</li>
                            <hr className='my-2' />
                            <li className='list-disc'><strong>Forms and Controlled Components:</strong> Proficient in creating controlled forms and handling user input through React's controlled components.</li>
                            <hr className='my-2' />
                            <li className='list-disc'><strong>API Integration:</strong> Familiarity with fetching and integrating data from APIs into React applications, utilizing tools like the Fetch API or Axios.</li>
                            <hr className='my-2' />
                            <li className='list-disc'><strong>Responsive Design with React:</strong> Ability to create responsive and mobile-friendly designs using React and CSS media queries.</li>
                        </ul>
                    </div>
                    <div className='w-100 flex flex-col items-center justify-center my-2'>
                        <div className='mx-auto h-[60px] w-[2px] bg-[#3d4c53]'></div>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <div id='redux' data-aos="fade-up">
                        <h2 className='fs-3 font-semibold text-[#3d4c53] mt-3 text-center'>Redux</h2>
                        <div className='w-100'>
                            <div className='mx-auto h-[1px] mt-2 w-[100px] bg-[#3d4c53]'></div>
                        </div>
                        <ul className='mx-3 mt-3'>
                            <li className='list-disc'><strong>Understanding of State Management:</strong> Familiarity with the concept of state management in frontend applications and the role Redux plays in maintaining a centralized application state.</li>
                            <hr className='my-2' />
                            <li className='list-disc'><strong>Redux Principles:</strong> Basic knowledge of Redux principles, including actions, reducers, and the single immutable state tree.</li>
                            <hr className='my-2' />
                            <li className='list-disc'><strong>Action Dispatching:</strong> Ability to dispatch actions to describe state changes in the application and initiate corresponding updates to the Redux store.</li>
                            <hr className='my-2' />
                            <li className='list-disc'><strong>Reducer Functions:</strong> Exposure to creating reducer functions to specify how the application's state changes in response to dispatched actions.</li>
                        </ul>
                    </div>
                    <div className='w-100 flex flex-col items-center justify-center my-2'>
                        <div className='mx-auto h-[60px] w-[2px] bg-[#3d4c53]'></div>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <div id='git&github'>
                        <h2 className='fs-3 font-semibold text-[#3d4c53] mt-3 text-center'>Git and Github</h2>
                        <div className='w-100'>
                            <div className='mx-auto h-[1px] mt-2 w-[100px] bg-[#3d4c53]'></div>
                        </div>
                        <ul className='mx-3 mt-3'>
                            <li className='list-disc'><strong>Version Control:</strong> Proficient in using Git for version control, enabling systematic tracking of changes and collaboration in a team environment.</li>
                            <hr className='my-2' />
                            <li className='list-disc'><strong>Repository Management:</strong> Experienced in creating, cloning, and managing Git repositories on local machines and remote servers, particularly on GitHub.</li>
                            <hr className='my-2' />
                            <li className='list-disc'><strong>Branching Strategies:</strong> Knowledge of branching strategies such as feature branching and Gitflow for organized and collaborative development workflows.</li>
                            <hr className='my-2' />
                            <li className='list-disc'><strong>Merging and Conflict Resolution:</strong> Skillful in merging branches and resolving merge conflicts to maintain a clean and cohesive codebase.</li>
                            <hr className='my-2' />
                            <li className='list-disc'><strong>Pull Requests:</strong> Proficient in creating and reviewing pull requests on GitHub, facilitating effective code collaboration and integration.</li>
                            <hr className='my-2' />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
