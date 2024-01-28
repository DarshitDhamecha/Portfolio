import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './pages/Hero';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Skills from './pages/Skills';
import About from './pages/About';
import Resume from './pages/Resume';
import Project from './pages/Project';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/project' element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
