import React from 'react'

const Heading = ({ title }) => {
    return (
        <div className='text-3xl my-5 text-white font-semibold w-fit'>
            {title}
            <div className='w-[50%] border border-highlight ml-auto mt-2'></div>
        </div>
    )
}

export default Heading