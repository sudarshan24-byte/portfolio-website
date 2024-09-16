import React, { useEffect, useState } from 'react'
import Dropdown from '../DropDown'
import { Link } from 'react-router-dom'
import Heading from '../Heading'
import Loading from '../Loading'
import Cards from '../Cards'
import { FaArrowRight } from 'react-icons/fa'

const AllProjects = () => {
    const [projects, setProjects] = useState([])
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [option, setOption] = useState('All')

    useEffect(() => {
        const portfolioData = async () => {
            try {
                let url = import.meta.env.VITE_PORFOLIO_URL
                let response = await fetch(`${url}/api/projects`)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                let result = await response.json()
                // console.log('Fetched data:', result);
                setProjects(result.data) //.slice(-6).reverse()
            } catch (error) {
                console.log(error);
            }
        }

        portfolioData()
    }, [])
    // console.log(projects);

    useEffect(() => {
        if (option === 'All') {
            setFilteredProjects([...projects].reverse())
        } else {
            // setFilteredProjects(projects.filter(project => project.sortby === option))
            const filtered = projects.filter(project => project.sortby === option);
            setFilteredProjects(filtered.reverse());
        }
    }, [option, projects])
    return (
        <div className='bg-secondary text-white p-4 min-h-screen'>
            <Heading title={'All Projects'} />
            <div className='flex justify-evenly items-center mb-5'>
                <Dropdown
                    setOption={setOption}
                />
                <Link to='/' className='ml-5'>
                    <div className='text-highlight flex items-center justify-between w-[7.5rem] md:w-[10rem] font-bold text-sm md:text-lg'>
                        Back to Home <FaArrowRight />
                    </div>
                </Link>
            </div>
            {projects.length == 0 && <Loading />}
            <div className='flex flex-wrap justify-around items-end gap-2'>
                {filteredProjects.map((data, i) => (
                    <Cards
                        key={i}
                        title={data.title}
                        image={data.img}
                        techstack={data.techstack.join(' | ')}
                        github={data.githublink} kaggle={data.kagglelink}
                        githubhref={data.githublink}
                        kagglehref={data.kagglelink}
                        website={data.websitelink}
                        websiteUrl={data.websitelink}
                        tag={data.tag}
                        imgUrl={data.image}
                        link={data._id}
                        type={data.sortby === 'Web Development' ? 'web' : 'ml'}
                    />
                ))}
            </div>
            {/* <div className='flex justify-end text-highlight'>
                <Link to='/projects'>
                    <div className='flex items-center justify-between w-[10rem] font-bold text-lg'>See All Projects <FaArrowRight /></div>
                </Link>
            </div> */}
        </div>
    )
}

export default AllProjects