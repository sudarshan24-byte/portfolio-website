import React from 'react'
import { FaGithub, FaKaggle } from "react-icons/fa";


const Cards = ({ title, image, techstack, githubhref, kagglehref, type, kaggle, github }) => {
    return (
        // <div className='p-4 hover:-translate-y-2 duration-300 mx-auto'>
        //     <div className='w-80 relative rounded-lg overflow-hidden shadow-lg shadow-secondary'>

        //         <div className=''>
        //             <img src={image} alt="License Plate" className='w-full h-60' />
        //         </div>

        //         <div className='text-white bg-[#191919] p-2'>
        //             <h1 className='text-xl font-semibold'>{title}</h1>
        //             {/* <h2 className='text-sm text-highlight'>{type}</h2> */}
        //             <div className='text-sm text-highlight'>{techstack}</div>
        //             <div className='my-3 flex items-center gap-2'>
        //                 {github ?
        //                     <a href={githubhref} target='_blank' className='bg-highlight p-1 rounded-lg flex w-fit items-center gap-1'>
        //                         <FaGithub />
        //                         Github
        //                     </a> : <div />
        //                 }
        //                 {kaggle ?
        //                     <a href={kagglehref} target='_blank' className='bg-sky-500 p-1 rounded-lg flex w-fit items-center gap-1'>
        //                         <FaKaggle />
        //                         Kaggle
        //                     </a> : <div />}
        //             </div>
        //         </div>
        //         <div className='bg-sky-500 shadow-xl shadow-black text-white absolute top-0 px-2 rounded-e-md'>{type}</div>
        //     </div>
        // </div>


        <div className='p-4 overflow-hidden hover:-translate-y-2 duration-300'>
            <div className='relative rounded-3xl overflow-hidden shadow-md shadow-black'>
                <img src={image} alt="img" className='w-80' />
                <div className='absolute top-0 w-full h-full flex justify-center items-end bg-black/75'>
                    <div className=' w-full h-[45%]'>
                        <div className='bg-[#323a96] shadow-xl shadow-black text-white absolute top-0 px-2 py-1 rounded-md w-fit'>
                            {type}
                        </div>
                        <div className='mx-2'>
                            <div className='text-lg md:text-[1.30rem] mt-4 font-bold'>{title}</div>
                            <div className='text-xs mt-0 text-[#ffffff99] font-poppins'>{techstack}</div>
                            {kaggle && github ?
                                <div className='my-3 flex items-center gap-2 absolute bottom-0'>
                                    {github ?
                                        <a href={githubhref} target='_blank' className='bg-highlight p-1 rounded-lg flex w-fit items-center gap-1'>
                                            <FaGithub />
                                            Github
                                        </a> : <div />
                                    }
                                    {kaggle ?
                                        <a href={kagglehref} target='_blank' className='bg-sky-500 p-1 rounded-lg flex w-fit items-center gap-1'>
                                            <FaKaggle />
                                            Kaggle
                                        </a> : <div />}
                                </div> :
                                <div className='my-3 flex items-center  absolute bottom-0'>
                                    {github ?
                                        <a href={githubhref} target='_blank' className='bg-highlight p-1 rounded-lg flex w-fit items-center gap-1'>
                                            <FaGithub />
                                            Github
                                        </a> : <div />
                                    }
                                    {kaggle ?
                                        <a href={kagglehref} target='_blank' className='bg-sky-500 p-1 rounded-lg flex w-fit items-center gap-1'>
                                            <FaKaggle />
                                            Kaggle
                                        </a> : <div />}
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards