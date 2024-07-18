import React, { useEffect, useState } from 'react'
import Counter from '../Counter'
import { Client, ID, Databases } from 'appwrite';
import config from '../../appwrite/config';
import ProblemCard from '../ProblemCard';
import Loading from '../Loading';

const Problems = () => {
    const [data, setData] = useState([])
    const [problems, setProblems] = useState([])
    const client = new Client()
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);

    const database = new Databases(client);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await database.listDocuments(
                    config.appwriteDatabaseId,
                    config.appwriteCollectionLeetCode,
                    []
                );
                let problemslist = await database.listDocuments(
                    config.appwriteDatabaseId,
                    config.appwriteCollectionIdLeetcodeProblems,
                    []
                );
                setProblems(problemslist.documents)
                setData(response.documents)
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
    // console.log(problems);

    return (
        <div className=''>
            {problems.length == 0 && <Loading />}
            <div className='bg-primary md:max-w-[70%] mx-auto px-2 md:px-5 py-3 text-center rounded-md shadow-md'>
                <div className='mb-2'>Leetcode profile link: <a className='text-highlight' href="https://leetcode.com/sudarshan24_byte/">sudarshan24_byte</a></div>
                <div className='flex flex-wrap justify-between items-center'>
                    <div className='text-4xl bg-highlight/10 p-3 m-2 rounded-lg w-20'>
                        {data.map((data, i) => (
                            <Counter key={i} from={0} to={data.problems} duration={1.5} />
                        ))}
                        <p className='text-highlight font-medium text-base'>Solved</p>
                    </div>
                    <div className='text-4xl bg-lime-400/10 p-3 m-2 rounded-lg w-20'>
                        {data.map((data, i) => (
                            <Counter key={i} from={0} to={data.easy} duration={1.5} />
                        ))}
                        <p className='text-lime-400 font-medium text-base'>Easy</p>
                    </div>
                    <div className='text-4xl bg-amber-400/10 p-3 m-2 rounded-lg w-20'>
                        {data.map((data, i) => (
                            <Counter key={i} from={0} to={data.medium} duration={1.5} />
                        ))}
                        <p className='text-amber-400 font-medium text-base'>Medium</p>
                    </div>
                    <div className='text-4xl bg-red-700/10 p-3 m-2 rounded-lg w-20'>
                        {data.map((data, i) => (
                            <Counter key={i} from={0} to={data.hard} duration={1.5} />
                        ))}
                        <p className='text-red-700 font-medium text-base'>Hard</p>
                    </div>
                </div>

                <div className='mt-10'>
                    <div className='w-fit mx-auto text-2xl'>
                        Top Problems
                        <div className='w-[50%] border border-highlight ml-auto mt-0'></div>
                    </div>

                    {problems.map((problem, i) => (
                        <div key={i}>
                            <ProblemCard title={problem.title} link={problem.link} type={problem.type} tag={problem.tag} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Problems