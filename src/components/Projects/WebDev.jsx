import React from 'react'
import Cards from '../Cards'

const WebDev = ({ data }) => {
    return (
        <div>
            <div className='flex flex-wrap justify-around items-end gap-2'>
                {data.map((data) => (
                    <Cards
                        key={data.id}
                        title={data.title}
                        image={data.imageUrl}
                        techstack={data.techStack}
                        githubhref={data.githubhref}
                        kagglehref={data.kagglehref}
                        type={data.type}
                        github={data.github}
                        kaggle={data.kaggle}
                    />
                ))}
            </div>
        </div>
    )
}

export default WebDev