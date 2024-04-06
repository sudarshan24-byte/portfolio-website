import React from 'react'

const SkillCard = ({ title, img }) => {
    return (
        // <div className='p-4 hover:-translate-y-2 duration-300 mx-auto'>
        //     <div className='w-80 bg-white shadow-lg'>

        //         <div className=''>
        //             <img src={img} alt="License Plate" className='' />
        //         </div>

        //         <div className='text-black p-2 border-t-2 border-black'>
        //             <h1 className='text-xl font-semibold text-center'>{title}</h1>
        //         </div>
        //     </div>
        // </div>
        <div className='relative hover:-translate-y-2 duration-300 overflow-hidden mx-auto rounded-lg'>
            <div className='w-80 h-40 bg-white shadow-lg rounded-lg'>

                <div className='relative w-full h-full '>
                    <div className='absolute top-0 w-full h-full bg-black opacity-60'></div>
                    <img src={img} alt="License Plate" className='w-full h-full object-cover' />
                    <div className='absolute top-0  w-full h-full flex items-center justify-center'>
                        <h1 className='text-2xl font-semibold  text-white text-center w-full'>
                            {title}
                        </h1>
                    </div>
                </div>

                {/* Removed the text-black class from the outer div and added text-black to the h1 */}
            </div>
        </div>
    )
}

export default SkillCard