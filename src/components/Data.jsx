import React, { useEffect, useState } from 'react'
import { Client, ID, Databases } from 'appwrite';
import config from '../appwrite/config';
import Card from './MoreProjects/Card';
import Loading from './Loading';

const Data = () => {
    const [data, setData] = useState([])
    const client = new Client()
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);

    const database = new Databases(client);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = import.meta.env.VITE_PORFOLIO_URL
                let response = await fetch(`${url}/api/otherprojects`)
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
        <div>
            {data.length == 0 && <Loading />}
            {data.map((data, i) => (
                <Card key={i}
                    title={data.title}
                    techstack={data.techstack.join(' | ')}
                    url={data.link}
                />
            ))}
        </div>
    )
}

export default Data