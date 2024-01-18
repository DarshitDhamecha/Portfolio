import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './pages/Hero';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Skills from './pages/Skills';
import About from './pages/About';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
