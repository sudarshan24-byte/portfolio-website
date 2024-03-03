import React from 'react'
import Sidebar from './components/MoreProjects/Sidebar'
import Banner from './components/Banner'
import { IoMdContact } from "react-icons/io";
import Projects from './components/Projects/Projects'
import Heading from './components/Heading'
import Card from './components/MoreProjects/Card';
import { moreprojects } from './components/MoreProjects/data';
import Skills from './components/Skills/Skills';
import SkillCard from './components/Skills/SkillCard';
import { skill } from './components/Skills/skill';

const App = () => {
  return (
    <>
      <div className='grid grid-cols-12'>
        <div className='col-span-3 bg-secondary hidden lg:block'>
          <Sidebar />
        </div>

        <div className='col-span-12 lg:col-span-9 h-[100%] bg-secondary text-white'>
          <div className="flex sticky shadow-md top-0 z-20 p-5 bg-secondary justify-end items-center gap-5">

            {/* Nav Section */}
            <button className='bg-highlight flex items-center gap-2 px-2 py-1 rounded-md'>
              <IoMdContact />
              <p>Contact Me</p>
            </button>
          </div>

          {/*  Banner Section */}
          <div>
            <Banner />
          </div>

          {/* Projects Section */}
          <div className='p-4'>
            <Heading title={'Projects'} />
            <Projects />
          </div>


          {/* Small - Medium Devices 'More Projects' Section */}
          <div className='lg:hidden'>
            <div className='text-white text-xl m-8 w-fit'>
              <p>More Projects</p>
              <div className='w-[50%] border border-highlight ml-auto mt-2'></div>
            </div>
            <div>
              {moreprojects.map((data) => (
                <Card key={data.id}
                  title={data.title}
                  techstack={data.techStack}
                  url={data.url}
                />
              ))}
              {/* <Card /> */}
            </div>
          </div>


          {/* Skills Section */}
          <div className='p-4'>
            <Heading title={'What I Know'} />
            <Skills />
          </div>

          <div className='p-4 flex flex-wrap justify-between items-center'>
            {skill.map((skill) => (
              <SkillCard key={skill.id} img={skill.img} title={skill.title} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App