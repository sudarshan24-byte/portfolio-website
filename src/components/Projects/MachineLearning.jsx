import React, { useEffect, useState } from 'react'
import Cards from '../Cards'
import { Client, ID, Databases } from 'appwrite';
import config from '../../appwrite/config';
import Loading from '../Loading';

const MachineLearning = () => {
    const [data, setData] = useState([])
    const client = new Client()
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);

    const database = new Databases(client);

    const extractDriveId = (link) => {
        const idStartIndex = link.indexOf('/d/') + 3;
        // console.log('idStartIndex', idStartIndex);
        const idEndIndex = link.indexOf('/view', idStartIndex);
        // console.log(idEndIndex);
        return link.substring(idStartIndex, idEndIndex);
    };

    const generateThumbnailUrl = (id) => {
        return `https://drive.google.com/thumbnail?id=${id}`;
    };

    // const driveId = extractDriveId('https://drive.google.com/file/d/18_nJ0AvjFHvjV_9Pl2F0wV5382g5FDrt/view?usp=drive_link');
    // const thumbnailUrl = generateThumbnailUrl(driveId);
    // console.log(thumbnailUrl);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await database.listDocuments(
                    config.appwriteDatabaseId,
                    config.appwriteCollectionIdML,
                    []
                );
                // console.log(response);
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
    // console.log(data)
    return (
        <div>
            {data.length == 0 && <Loading />}
            <div className='flex flex-wrap justify-around items-end gap-2'>
                {data.map((data, i) => (
                    <Cards
                        key={i}
                        title={data.title}
                        image={data.img}
                        techstack={data.techstack}
                        github={data.github} kaggle={data.kaggle}
                        githubhref={data.githubUrl}
                        kagglehref={data.kaggleUrl}
                        tag={data.tag}
                        imgUrl={data.imgUrl}
                        website={data.website}
                        link={data.$id}
                        type={'ml'}
                    />
                ))}
            </div>
        </div>
    )
}

export default MachineLearning