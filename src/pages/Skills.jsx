import React from 'react'

export default function Skills() {
    return (
        <>
            <h2 className='fs-3 text-center mt-3 font-semibold text-[#3d4c53] headding-fonts'>&lt; My Competence &gt;</h2>
            <div className='w-100 mt-2'>
                <div className='mx-auto h-[2px] w-[125px] bg-[#3d4c53]'></div>
            </div>

            <div className='w-100 flex px-3 gap-3 flex-wrap my-3'>
                <a href="#" className='py-2 px-3 text-[#fff] bg-[#3d4c53]'>HTML</a>
                <a href="#css" className='py-2 px-3 text-[#fff] bg-[#3d4c53]'>CSS</a>
                <a href="#css" className='py-2 px-3 text-[#fff] bg-[#3d4c53]'>Bootstrap</a>
                <a href="#css" className='py-2 px-3 text-[#fff] bg-[#3d4c53]'>Tailwind Css</a>
                <a href="#" className='py-2 px-3 text-[#fff] bg-[#3d4c53]'>JavaScript</a>
                <a href="#" className='py-2 px-3 text-[#fff] bg-[#3d4c53]'>React js</a>
                <a href="#" className='py-2 px-3 text-[#fff] bg-[#3d4c53]'>Redux</a>
                <a href="#" className='py-2 px-3 text-[#fff] bg-[#3d4c53]'>Git</a>
                <a href="#" className='py-2 px-3 text-[#fff] bg-[#3d4c53]'>Github</a>
            </div>


            <div className='w-100 px-3'>
                <div className="card text-bg-primary">
                    <div className="card-header px-2 p-0 fs-3 text-center">HTML</div>
                    <div className="card-body py-1">
                        <ul>
                            <li>Proficient in writing clean, semantic HTML5 markup.</li>
                            <hr className='my-1' />
                            <li>Experience in creating responsive and mobile-friendly web pages using HTML and CSS.</li>
                            <hr className='my-1' />
                            <li>Deep understanding of HTML document structure and the use of various tags.</li>
                            <hr className='my-1' />
                            <li>Familiarity with HTML forms, input validation, and integration with server-side processing.</li>
                            <hr className='my-1' />
                            <li>Experience with the integration of multimedia elements, such as images, audio, and video, using HTML.</li>
                            <hr className='my-1' />
                            <li>Understanding of HTML5 features, including canvas, local storage, and web sockets.</li>
                        </ul>
                    </div>
                </div>
                <div className="card text-bg-secondary mt-3">
                    <div className="card-header text-center fs-3 p-0 px-2">CSS, Bootstrap, and Tailwind CSS</div>
                    <div className="card-body py-1">
                        <ul>
                            <li><strong>CSS:</strong> Proficient in writing clean, modular CSS code to create visually appealing and user-friendly designs. Strong understanding of CSS3 features, including flexbox and grid, to build responsive layouts.</li>
                            <hr className='my-2' />
                            <li><strong>Bootstrap:</strong> Extensive experience in leveraging Bootstrap to streamline the development process. Skilled in utilizing Bootstrap components and utilities to create consistent and responsive web designs.</li>
                            <hr className='my-2' />
                            <li><strong>Tailwind CSS:</strong> Proficient in using Tailwind CSS for utility-first and highly customizable styling. Experience in building efficient and maintainable stylesheets with Tailwind's utility classes.</li>
                            <hr className='my-2' />
                            <li><strong>Responsive Design:</strong> Skilled in implementing responsive design principles across various screen sizes and devices for a consistent and user-friendly experience.</li>
                        </ul>
                    </div>
                </div>
                <div className="card text-bg-primary mt-3">
                    <div className="card-header fs-3 py-1 text-center">JavaScript</div>
                    <div className="card-body py-1">
                        <ul>
                            <li><strong>Proficient in JavaScript:</strong> Demonstrated expertise in writing clean, efficient, and modular JavaScript code.</li>
                            <hr className='my-2' />
                            <li><strong>Frontend Development:</strong>  experience in frontend development, utilizing JavaScript to create dynamic and interactive user interfaces.</li>
                            <hr className='my-2' />
                            <li><strong>ES6+ Features:</strong> knowledge and application of modern JavaScript features, including arrow functions, destructuring, and async/await.</li>
                            <hr className='my-2' />
                            <li><strong>DOM Manipulation:</strong> Expertise in manipulating the Document Object Model (DOM) for dynamic and responsive user interfaces.</li>
                            <hr className='my-2' />
                            <li><strong>Event-Driven Programming:</strong> Skilled in handling user events and creating interactive applications through event-driven programming.</li>
                            <hr className='my-2' />
                            <li><strong>Continuous Learning:</strong> Proactive in staying updated with the latest JavaScript advancements, frameworks, and best practices to enhance frontend development skills.</li>
                        </ul>
                    </div>
                </div>
                <div className="card text-bg-secondary mt-3">
                    <div className="card-header text-center fs-3 p-0 px-2">React.js</div>
                    <div className="card-body py-1">
                        <ul>
                            <li><strong>Component-Based Development:</strong> Expertise in building scalable and reusable UI components following React's component-based architecture.</li>
                            <hr className='my-2' />
                            <li><strong>React Hooks:</strong> In-depth knowledge and practical application of React Hooks for managing state, side effects, and other functionalities in functional components.</li>
                            <hr className='my-2' />
                            <li><strong>React Router:</strong> Experience in implementing client-side routing using React Router for seamless navigation in single-page applications.</li>
                            <hr className='my-2' />
                            <li><strong>Forms and Controlled Components:</strong> Proficient in creating controlled forms and handling user input through React's controlled components.</li>
                            <hr className='my-2' />
                            <li><strong>API Integration:</strong> Familiarity with fetching and integrating data from APIs into React applications, utilizing tools like the Fetch API or Axios.</li>
                            <hr className='my-2' />
                            <li><strong>Responsive Design with React:</strong> Ability to create responsive and mobile-friendly designs using React and CSS media queries.</li>
                        </ul>
                    </div>
                </div>
                <div className="card text-bg-primary mt-3">
                    <div className="card-header fs-3 py-1 text-center">Redux</div>
                    <div className="card-body py-1">
                        <ul>
                            <li><strong>Understanding of State Management:</strong> Familiarity with the concept of state management in frontend applications and the role Redux plays in maintaining a centralized application state.</li>
                            <hr className='my-2' />
                            <li><strong>Redux Principles:</strong> Basic knowledge of Redux principles, including actions, reducers, and the single immutable state tree.</li>
                            <hr className='my-2' />
                            <li><strong>Action Dispatching:</strong> Ability to dispatch actions to describe state changes in the application and initiate corresponding updates to the Redux store.</li>
                            <hr className='my-2' />
                            <li><strong>Reducer Functions:</strong> Exposure to creating reducer functions to specify how the application's state changes in response to dispatched actions.</li>
                            <hr className='my-2' />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
