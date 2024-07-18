import React from 'react'
import { FaGithub, FaKaggle } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { Link } from 'react-router-dom';


const Cards = ({ title, image, imgUrl, techstack, githubhref, kagglehref, tag, kaggle, github, website, websiteUrl, link, type }) => {
    const handleClick = (e, url) => {
        e.preventDefault();
        window.open(url, '_blank');
    };
    return (
        <Link to={`/project/${type}/${link}`} className='p-4 overflow-hidden hover:-translate-y-2 duration-300 z-0'>
            <div className='relative rounded-3xl overflow-hidden shadow-md shadow-black'>
                <img src={imgUrl || image} alt="img" className='w-80' />
                <div className='absolute top-0 w-full h-full flex justify-center items-end bg-black/75'>
                    <div className='w-full h-[45%]'>
                        <div className='bg-[#323a96] shadow-xl shadow-black text-white absolute top-0 px-2 py-1 rounded-md w-fit'>
                            {tag}
                        </div>
                        <div className='mx-2'>
                            <div className='text-lg md:text-[1.30rem] mt-4 font-bold'>{title}</div>
                            <div className='text-xs mt-0 text-[#ffffff99] font-poppins'>{techstack}</div>
                            <div className='text-sm'>Read More</div>
                            <div className='my-3 flex items-center absolute bottom-0 z-30'>
                                {github ? (
                                    <a href={githubhref} className='bg-highlight p-1 rounded-lg flex w-fit items-center gap-1 mx-1' onClick={(e) => handleClick(e, githubhref)}>
                                        <FaGithub />
                                        Github
                                    </a>
                                ) : (
                                    <div />
                                )}
                                {kaggle ? (
                                    <a href={kagglehref} className='bg-sky-500 p-1 rounded-lg flex w-fit items-center gap-1 mx-1' onClick={(e) => handleClick(e, kagglehref)}>
                                        <FaKaggle />
                                        Kaggle
                                    </a>
                                ) : (
                                    <div />
                                )}
                                {website ? (
                                    <a href={websiteUrl} className='bg-fuchsia-700 p-1 rounded-lg flex w-fit items-center gap-1 mx-1' onClick={(e) => handleClick(e, websiteUrl)}>
                                        <CgWebsite />
                                        Website
                                    </a>
                                ) : (
                                    <div />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>


        // <Link to={`/project/${type}/${link}`} className='p-4 overflow-hidden hover:-translate-y-2 duration-300 z-0' onClick={handleClick}>
        //     <div className='relative rounded-3xl overflow-hidden shadow-md shadow-black'>
        //         <img src={imgUrl || image} alt="img" className='w-80' />
        //         <div className='absolute top-0 w-full h-full flex justify-center items-end bg-black/75'>
        //             <div className=' w-full h-[45%]'>
        //                 <div className='bg-[#323a96] shadow-xl shadow-black text-white absolute top-0 px-2 py-1 rounded-md w-fit'>
        //                     {tag}
        //                 </div>
        //                 <div className='mx-2'>
        //                     <div className='text-lg md:text-[1.30rem] mt-4 font-bold'>{title}</div>
        //                     <div className='text-xs mt-0 text-[#ffffff99] font-poppins'>{techstack}</div>
        //                     <div className='text-sm'>Read More</div>
        //                     <div className='my-3 flex items-center absolute bottom-0 z-30'>
        //                         {github ?
        //                             <a href={githubhref} target='_blank' className='bg-highlight p-1 rounded-lg flex w-fit items-center gap-1 mx-1'>
        //                                 <FaGithub />
        //                                 Github
        //                             </a> : <div />
        //                         }
        //                         {kaggle ?
        //                             <a href={kagglehref} target='_blank' className='bg-sky-500 p-1 rounded-lg flex w-fit items-center gap-1 mx-1'>
        //                                 <FaKaggle />
        //                                 Kaggle
        //                             </a> : <div />}
        //                         {website ?
        //                             <a href={websiteUrl} target='_blank' className='bg-fuchsia-700 p-1 rounded-lg flex w-fit items-center gap-1 mx-1'>
        //                                 <CgWebsite />
        //                                 Website
        //                             </a> : <div />}
        //                     </div>
        //                     {/* } */}

        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </Link>
    )
}

export default Cards