import React from 'react'
import Cards from '../Cards'

const WebDev = ({ data }) => {
    return (
        <div className='flex flex-wrap justify-between items-center gap-2'>
            {data.map((data) => (
                <Cards
                    key={data.id}
                    title={data.title}
                    image={data.imageUrl}
                    techstack={data.techStack}
                    url={data.href}
                    type={data.type}
                />
            ))}
        </div>
    )
}

export default WebDev