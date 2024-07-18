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
                let response = await database.listDocuments(
                    config.appwriteDatabaseId,
                    config.appwriteCollectionIdOtherProjects,
                    []
                );
                // console.log(response);
                setData(response.documents) // Store the first document data in state
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
                    title={data.Title}
                    techstack={data.techstack}
                    url={data.link}
                />
            ))}
        </div>
    )
}

export default Data