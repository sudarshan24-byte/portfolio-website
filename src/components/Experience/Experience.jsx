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
                let response = await database.listDocuments(
                    config.appwriteDatabaseId,
                    config.appwriteCollectionIdExperience,
                    []
                );
                setData(response.documents) // Store the first document data in state
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
    // console.log(data);
    return (
        <div className='flex flex-wrap justify-evenly items-baseline gap-4'>
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