import React, { useEffect, useState } from 'react'
import ExperienceCard from './ExperienceCard'
import { Client, ID, Databases } from 'appwrite';
import config from '../../appwrite/config';
import Loading from '../Loading';

const Experience = () => {
    const [data, setData] = useState([])
    const client = new Client()
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);

    const database = new Databases(client);
    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = import.meta.env.VITE_PORFOLIO_URL
                let response = await fetch(`${url}/api/experience`)
                let data = await response.json()
                // console.log(response);
                setData(data.data.reverse()) // Store the first document data in state
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
    // console.log(data);
    return (
        <div
            className={data.length > 2 ? 'flex flex-wrap justify-between items-baseline mx-10 gap-4' : 'flex flex-wrap justify-evenly items-baseline gap-4'}>
            {data.length == 0 && <Loading />}
            {data.map((data, i) => (
                <ExperienceCard key={i}
                    date={data.date}
                    title={data.title}
                    description={data.description}
                    role={data.role}
                />
            ))}
        </div>
    )
}

export default Experience