import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../src/assets/header.css";

export default function Header() {
  // Use state to manage the class for each link separately
  const [homeClass, setHomeClass] = useState(false);
  const [resumeClass, setResumeClass] = useState(false);
  const [projectsClass, setProjectsClass] = useState(false);
  const [aboutClass, setAboutClass] = useState(false);
  const [skillsClass, setSkillsClass] = useState(false);

  const handleHomeClick = () => {
    setHomeClass(!homeClass);
  };

  const handleResumeClick = () => {
    setResumeClass(!resumeClass);
  };

  const handleProjectsClick = () => {
    setProjectsClass(!projectsClass);
  };

  const handleAboutClick = () => {
    setAboutClass(!aboutClass);
  };

  const handleSkillsClick = () => {
    setSkillsClass(!skillsClass);
  };

  return (
    <>
      <div className='bg-[#3d4c53] sticky top-0 z-50 h-[50px] border-b-2 border-[#797979] w-100 flex text-[#fff] items-center responsive'>
        <Link to='/' className={`header-eff ${homeClass ? 'addclass' : ''}`} onClick={handleHomeClick}>HOME</Link>
        <Link to='/resume' className={`header-eff ${resumeClass ? 'addclass' : ''}`} onClick={handleResumeClick}>RESUME</Link>
        <Link to='#' className={`header-eff ${projectsClass ? 'addclass' : ''}`} onClick={handleProjectsClick}>PROJECTS</Link>
        <Link to='/about' className={`header-eff ${aboutClass ? 'addclass' : ''}`} onClick={handleAboutClick}>ABOUT</Link>
        <Link to='/skills' className={`header-eff ${skillsClass ? 'addclass' : ''}`} onClick={handleSkillsClick}>SKILLS</Link>
      </div>
    </>
  );
}
