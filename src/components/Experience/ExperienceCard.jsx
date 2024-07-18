import React from 'react'
import { MdDateRange } from "react-icons/md";

const ExperienceCard = ({ date, title, description, role }) => {
    return (
        <div className='md:w-[40%] p-4 bg-primary rounded-xl shadow-md hover:-translate-y-2 duration-300'>
            <div className='flex gap-1 items-center text-sm'><MdDateRange />{date}</div>
            <div className='text-lg font-bold'>{title}</div>
            <div className='italic text-sm'>{role}</div>

            <div className='text-sm mt-5'>
                {description}
            </div>
        </div>
    )
}

export default ExperienceCard