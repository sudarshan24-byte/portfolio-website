import React from 'react'

const Cards = ({ title, image, techstack, url, type }) => {
    return (
        <a href={url} target='_blank' className='p-4 hover:-translate-y-2 duration-300 mx-auto'>
            <div className='w-80 bg-white'>

                <div className=''>
                    <img src={image} alt="License Plate" className='' />
                </div>

                <div className='text-black p-2 border-t-2 border-black'>
                    <h1 className='text-xl font-semibold'>{title}</h1>
                    <h2 className='text-sm text-highlight'>{type}</h2>
                    <p className='text-sm'>{techstack}</p>
                </div>
            </div>
        </a>
    )
}

export default Cards