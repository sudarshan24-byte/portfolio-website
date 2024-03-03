import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Card = ({ title, techstack, url, icon }) => {
    return (
        <div className='mx-8 mb-10 group'>
            <a href={url} target="_blank"
                className='flex justify-between items-center cursor-pointer'>
                <div className='flex justify-between items-center gap-4'>
                    <div>
                        <h1 className='text-lg text-[#8b8a91] group-hover:text-white'>{title}</h1>
                        <p className='text-[#4f4f52] text-sm'>{techstack}</p>
                    </div>
                </div>
                <div><IoIosArrowForward /></div>
            </a>
        </div>
    )
}

export default Card