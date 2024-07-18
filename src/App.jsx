import React from 'react'
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import ProjectsDetail from './components/Projects/ProjectsDetail';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/project/:type/:id' element={<ProjectsDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App