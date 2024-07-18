import React, { useEffect, useState } from 'react'
import Card from './Card';
import { Client, ID, Databases } from 'appwrite';
import config from '../../appwrite/config';
import Loading from '../Loading';
// import { moreprojects } from './data'
// import Data from ''

export default function Sidebar() {
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
        <div className="sticky top-[0%] bg-secondary text-white h-[100vh] p-4">
            <div className='bg-primary h-[100%] p-2 rounded-2xl overflow-y-auto'>

                <div className='text-white text-xl m-8 w-fit'>
                    <p>More Projects</p>
                    <div className='w-[50%] border border-highlight ml-auto mt-2'></div>
                </div>
                {data.length == 0 && <Loading />}
                <div>
                    <div>
                        {data.map((data, i) => (
                            <Card key={i}
                                title={data.Title}
                                techstack={data.techstack}
                                url={data.link}
                            />
                        ))}
                    </div>
                    {/* <Data /> */}
                </div>
            </div>
        </div>
    );
}


// export default Sidebar