import { Client, Databases } from 'appwrite';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import config from '../../appwrite/config';
import Loading from '../Loading';
import { FaGithub, FaKaggle } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';

const ProjectsDetail = () => {
    const { type, id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    const client = new Client()
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);

    const database = new Databases(client);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const collectionId = type == 'ml' ? config.appwriteCollectionIdML : config.appwriteCollectionIdWeb
                const response = await database.getDocument(config.appwriteDatabaseId, collectionId, id);
                setProject(response);
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
            finally {
                setLoading(false)
            }
        };

        fetchBlog();
    }, [id]);
    console.log(project);

    if (loading) {
        return <div className='bg-primary h-screen flex justify-center items-center'><Loading /></div>
    }
    return (
        <>
            <div className='h-screen text-white grid grid-cols-12'>
                <div className='bg-primary relative px-5 md:px-10 h-full pt-2 col-span-8'>
                    <h1 className='text-4xl md:text-5xl text-highlight'>{project.title}</h1>
                    <div className='bg-secondary w-fit rounded-md p-2 text-xs lg:text-sm'>{project.techstack}</div>
                    <div className='w-[100%] mt-5'>{project.description}</div>
                    <div className='w-fit flex my-3'>{
                        project.github ?
                            <a href={project.githubUrl} target='_blank' className='bg-highlight p-1 rounded-lg flex w-fit items-center gap-1 mx-1'>
                                <FaGithub />
                                Github
                            </a> : <div />
                    }
                        {project.kaggle ?
                            <a href={project.kaggleUrl} target='_blank' className='bg-sky-500 p-1 rounded-lg flex w-fit items-center gap-1 mx-1'>
                                <FaKaggle />
                                Kaggle
                            </a> : <div />}
                        {project.website ?
                            <a href={project.websiteUrl} target='_blank' className='bg-fuchsia-700 p-1 rounded-lg flex w-fit items-center gap-1 mx-1'>
                                <CgWebsite />
                                Website
                            </a> : <div />}
                    </div>
                </div>

                <div className='bg-secondary h-full col-span-4'>
                    <img src={project.imgUrl} alt={`${project.title} Image`} className='h-full overflow-hidden object-cover' />
                </div>
            </div>
        </>
    )
}

export default ProjectsDetail

// Great! Now I want an image in the BlogDetail Component (imgUrl present in the api, the image is in perfect square shape), the image I need in such a way that it should be rectangle and the image 