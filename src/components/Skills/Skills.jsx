import React from 'react'
import Title from './Title'

import Card from './Card';

// Icon Import
import { FaPython, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiNumpy, SiPandas, SiTensorflow, SiOpencv, SiJupyter, SiScikitlearn, SiPlotly, SiAlwaysdata, SiDjango, SiMongodb, SiExpress } from "react-icons/si";
import { BsClipboard2DataFill } from "react-icons/bs";
import { TbApi } from "react-icons/tb";

const Skills = () => {
    return (
        <div className='flex flex-wrap justify-center items-center gap-5 my-10'>
            {/* Languages */}
            <div className='bg-primary max-w-96 px-5 py-3 text-center rounded-md text-fus-500'>
                <Title title='Languages' />
                <div className='flex flex-wrap justify-between items-center gap-5'>
                    <Card skill='Python' color='' bordercolor='border-sky-400' icon={<FaPython />} iconcolor='text-blue-500' />
                    <Card skill='JavaScript' color='text-amber-500' bordercolor='' icon={<DiJavascript />} iconcolor='text-yellow-500' />
                </div>
            </div>

            {/* Machine Learning */}
            <div className='bg-primary max-w-96 px-5 py-3 text-center rounded-md'>
                <Title title='Data Science and Machine Learning' />
                <div className='flex flex-wrap justify-center items-center gap-5'>
                    <Card skill='Numpy' color='text-sky-600' bordercolor='border-blue-400/45' icon={<SiNumpy />} iconcolor='text-blue-500/45' />
                    <Card skill='Pandas' color='text-violet-600' bordercolor='border-indigo-800/45' icon={<SiPandas />} iconcolor='text-indigo-800' />
                    <Card skill='Matplotlib' color='' bordercolor='border-teal-400' icon={<SiAlwaysdata />} iconcolor='text-teal-600' />
                    <Card skill='Seaborn' color='yellow' bordercolor='border-red-400/45' icon={<BsClipboard2DataFill />} iconcolor='text-lime-500' />
                    <Card skill='Plotly' color='' bordercolor='border-emerald-400' icon={<SiPlotly />} iconcolor='text-emerald-500' />
                    <Card skill='Scikit-Learn' color='' bordercolor='border-fuchsia-400' icon={<SiScikitlearn />} iconcolor='text-fuchsia-500' />
                    <Card skill='TensorFlow' color='text-orange-500' bordercolor='' icon={<SiTensorflow />} iconcolor='text-orange-500' />
                    <Card skill='OpenCV' color='text-green-500' bordercolor='' icon={<SiOpencv />} iconcolor='text-red-500' />
                    <Card skill='Jupyter Notebook' color='text-[#FFFFEC]' bordercolor='border-red-400/45' icon={<SiJupyter />} iconcolor='text-yellow-500' />
                </div>
            </div>

            {/* Web Development */}
            <div className='bg-primary max-w-96 px-5 py-3 text-center rounded-md'>
                <Title title='Web Development' />
                <div className='flex flex-wrap justify-center items-center gap-5'>
                    <Card skill='HTML5' color='yellow' bordercolor='border-orange-400' icon={<FaHtml5 />} iconcolor='text-orange-500' />
                    <Card skill='CSS3' color='yellow' bordercolor='' icon={<FaCss3Alt />} iconcolor='text-sky-500' />
                    <Card skill='ReactJS' color='yellow' bordercolor='border-blue-400' icon={<FaReact />} iconcolor='text-blue-500' />
                    <Card skill='Tailwind CSS' color='yellow' bordercolor='border-sky-500' icon={<FaPython />} iconcolor='text-cyan-400' />
                    <Card skill='Django' color='yellow' bordercolor='border-green-400' icon={<SiDjango />} iconcolor='text-green-500' />
                    <Card skill='ExpressJS' color='yellow' bordercolor='' icon={<SiExpress />} iconcolor='text-yellow-500' />
                    <Card skill='RESTful APIs' color='yellow' bordercolor='' icon={<TbApi />} iconcolor='text-indigo-500' />
                    <Card skill='MongoDB' color='yellow' bordercolor='' icon={<SiMongodb />} iconcolor='text-emerald-400' />
                </div>
            </div>

            {/* Version Control */}
            <div className='bg-primary max-w-96 px-5 py-3 text-center rounded-md'>
                <Title title='Version Control' />
                <div className='flex flex-wrap justify-between items-center gap-5'>
                    <Card skill='Git' color='yellow' bordercolor='' icon={<FaGitAlt />} iconcolor='text-rose-500' />
                    <Card skill='Github' color='yellow' bordercolor='border-red-400' icon={<FaGithub />} iconcolor='text-red-500' />
                </div>
            </div>

        </div>
    )
}

export default Skills