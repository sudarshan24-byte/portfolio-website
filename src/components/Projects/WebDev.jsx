import React, { useEffect, useState } from 'react'
import Cards from '../Cards'
import { Client, ID, Databases } from 'appwrite';
import config from '../../appwrite/config';
import Loading from '../Loading';

const WebDev = () => {
    const [data, setData] = useState([])
    const client = new Client()
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);

    const database = new Databases(client);

    const extractDriveId = (link) => {
        const idStartIndex = link.indexOf('/d/') + 3;
        const idEndIndex = link.indexOf('/view', idStartIndex);
        return link.substring(idStartIndex, idEndIndex);
    };

    const generateThumbnailUrl = (id) => {
        return `https://drive.google.com/thumbnail?id=${id}`;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await database.listDocuments(
                    config.appwriteDatabaseId,
                    config.appwriteCollectionIdWeb,
                    []
                );
                setData(response.documents.map(item => ({
                    ...item,
                    img: generateThumbnailUrl(extractDriveId(item.img))
                }))); // Store the first document data in state
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {data.length == 0 && <Loading />}
            <div className='flex flex-wrap justify-around items-end gap-2'>
                {data.map((data, i) => (
                    <Cards
                        key={i}
                        title={data.title}
                        image={data.img}
                        imgUrl={data.imgUrl}
                        techstack={data.techstack}
                        github={data.github} kaggle={data.kaggle}
                        githubhref={data.githubUrl}
                        kagglehref={data.kaggleUrl}
                        tag={data.tag}
                        website={data.website}
                        websiteUrl={data.websiteUrl}
                        link={data.$id}
                        type={'web'}

                    />
                ))}
            </div>
        </div>
    )
}

export default WebDev