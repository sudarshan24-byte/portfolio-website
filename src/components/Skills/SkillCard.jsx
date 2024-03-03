import React from 'react'

const SkillCard = ({ title, img }) => {
    return (
        <div className='p-4 hover:-translate-y-2 duration-300 mx-auto'>
            <div className='w-80 bg-white'>

                <div className=''>
                    <img src={img} alt="License Plate" className='' />
                </div>

                <div className='text-black p-2 border-t-2 border-black'>
                    <h1 className='text-xl font-semibold text-center'>{title}</h1>
                </div>
            </div>
        </div>
    )
}

export default SkillCard