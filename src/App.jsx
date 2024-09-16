import React from 'react'
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import ProjectsDetail from './components/Projects/ProjectsDetail';
import AllProjects from './components/Projects/AllProjects';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/project/:type/:id' element={<ProjectsDetail />} />
          <Route path='/projects' element={<AllProjects />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App