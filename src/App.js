import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './pages/Hero';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Skills from './pages/Skills';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </>
  );
}

export default App;
