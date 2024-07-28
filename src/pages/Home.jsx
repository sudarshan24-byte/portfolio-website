import React, { useState, useEffect, useRef } from 'react'
import Sidebar from '../components/MoreProjects/Sidebar'
import Banner from '../components/Banner'
import Projects from '../components/Projects/Projects'
import Heading from '../components/Heading'
import Card from '../components/MoreProjects/Card';
// import { moreprojects } from '../components/MoreProjects/data';
import Skills from '../components/Skills/Skills';
import SkillCard from '../components/Skills/SkillCard';
import { skill } from '../components/Skills/skill';

import { Client, ID, Databases } from 'appwrite';
import config from '../appwrite/config'

import { IoMdContact } from "react-icons/io";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { Link } from 'react-router-dom'
import Cards from '../components/Cards'
import Demo from '../components/Demo'
import Experience from '../components/Experience/Experience'
import Data from '../components/Data'
import { animate, useMotionValue, useTransform, motion } from 'framer-motion'
import Problems from '../components/Projects/Problems'

const Home = () => {
    const handleDownload = () => {
        // const resumeUrl = data[0].resume;
        fetch('/ML-Resume.pdf')
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                console.log(url);

                const a = document.createElement('a');
                a.href = url;
                a.download = 'SudarshanTrifaleyResume.pdf';
                document.body.appendChild(a);

                a.click();

                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            })
            .catch(error => console.error('Error fetching PDF file:', error));
    };

    // const handleDownload = async () => {
    //     try {
    //         const response = await fetch(data.resume, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/pdf'
    //             }
    //         });

    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }

    //         const blob = await response.blob();
    //         const url = window.URL.createObjectURL(blob);
    //         const a = document.createElement('a');
    //         a.href = url;
    //         a.download = 'resume.pdf';
    //         document.body.appendChild(a);
    //         a.click();
    //         a.remove();
    //         window.URL.revokeObjectURL(url);
    //     } catch (error) {
    //         console.error('Error downloading the file:', error);
    //     }
    // };

    return (
        <>
            <div className='grid grid-cols-12'>
                <div className='col-span-3 bg-secondary hidden lg:block'>
                    <Sidebar />
                </div>

                <div className='col-span-12 lg:col-span-9 h-[100%] bg-secondary text-white'>
                    <div className="flex sticky shadow-md top-0 z-20 p-5 bg-secondary justify-end items-center gap-5">

                        {/* Nav Section */}
                        <button onClick={handleDownload} className='bg-highlight flex items-center gap-2 px-2 py-1 rounded-md lg:hidden'>
                            <BsFillPersonVcardFill />
                            <p>My Resume</p>
                        </button>
                        <Link to='/contact' className='bg-highlight flex items-center gap-2 px-2 py-1 rounded-md'>
                            <IoMdContact />
                            <p>Contact Me</p>
                        </Link>
                    </div>

                    {/*  Banner Section */}
                    <div>
                        <Banner download={handleDownload} />
                    </div>

                    {/* Projects Section */}
                    <div className='p-4'>
                        <Heading title={'Projects'} />
                        <Projects />
                    </div>


                    {/* Small - Medium Devices 'More Projects' Section */}
                    <div className='lg:hidden bg-primary p-4'>
                        {/* <div className='text-white text-xl m-8 w-fit'>
              <p>More Projects</p>
              <div className='w-[50%] border border-highlight ml-auto mt-2'></div>
            </div> */}
                        <Heading title={'More Projects'} />
                        <div className='bg-secondary py-5 mx-5 h-80 overflow-y-auto rounded-xl'>
                            {/* <div>
                                {moreprojects.map((data) => (
                                    <Card key={data.id}
                                        title={data.title}
                                        techstack={data.techStack}
                                        url={data.href}
                                    />
                                ))}
                            </div> */}
                            <Data />

                            {/* <Card /> */}
                        </div>
                    </div>


                    {/* Skills Section */}
                    <div className='p-4'>
                        <Heading title={'What I Know'} />
                        <Skills />
                    </div>

                    {/* Experience */}
                    <div className='p-4'>
                        <Heading title={'My Experience'} />
                        <Experience />
                    </div>

                    {/* DSA Problems */}
                    <div className='p-4'>
                        <Heading title={'DSA Problems'} />
                        <Problems />
                    </div>

                    {/* My Interests */}
                    <div className='p-4'>
                        <Heading title={'My Interests'} />
                        <div className='p-4 flex flex-wrap justify-between items-center gap-4'>
                            {skill.map((skill) => (
                                <SkillCard key={skill.id} img={skill.img} title={skill.title} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home