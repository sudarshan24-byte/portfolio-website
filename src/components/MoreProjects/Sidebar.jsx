import React from 'react'
import Card from './Card';
import { moreprojects } from './data'

export default function Sidebar() {
    return (

        <div className="sticky top-[0%] bg-secondary text-white h-[100vh] p-4">
            <div className='bg-primary h-[100%] p-2 rounded-2xl overflow-y-auto'>

                <div className='text-white text-xl m-8 w-fit'>
                    <p>More Projects</p>
                    <div className='w-[50%] border border-highlight ml-auto mt-2'></div>
                </div>
                <div>
                    {moreprojects.map((data) => (
                        <Card key={data.id}
                            title={data.title}
                            techstack={data.techStack}
                            url={data.href}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}


// export default Sidebar