import React, { useState } from 'react'
import MachineLearning from './MachineLearning';
import WebDev from './WebDev';
import { ML_projects, Web_projects } from '../../assets/data'


const Projects = () => {
    const [activeSection, setActiveSection] = useState('ML');
    const handleSectionChange = (sectionId) => {
        setActiveSection(sectionId);
    };
    return (
        <>
            {/* Buttons */}
            <div className="grid grid-cols-2 place-items-center my-5">
                {/* flex flex-col md:flex-row justify-evenly items-end */}
                <button
                    onClick={() => handleSectionChange('ML')}
                    className={`mr-4 ${activeSection === 'ML' ? 'font-bold text-highlight' : ''}`}
                >
                    Machine Learning
                </button>
                <button
                    onClick={() => handleSectionChange('Web')}
                    className={`mr-4 ${activeSection === 'Web' ? 'font-bold text-highlight' : ''}`}
                >
                    Web Development
                </button>

            </div>

            {/* Content */}
            <div className='p-4 mt-4'>
                <div id="2022" style={{ display: activeSection === 'ML' ? 'block' : 'none' }}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'
                >
                    {/* Content for Skills */}
                    <MachineLearning data={ML_projects} />
                </div>
                <div id="2022" style={{ display: activeSection === 'Web' ? 'block' : 'none' }}>
                    {/* Content for Skills */}
                    <WebDev data={Web_projects} />
                </div>
            </div>
        </>
    )
}

export default Projects