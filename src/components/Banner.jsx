import React from 'react'
import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaGithub, FaKaggle, FaLinkedin } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Banner = ({ download }) => {
    return (
        <>
            <div className='rounded-xl p-4'>
                <div className='h-[200px] banner bg-cover bg-bottom shadow-sm'>
                    <div className='h-full flex justify-between items-center bg-black/60 p-4'>
                        <div className='flex justify-between items-center gap-5'>
                            <div className='profile-pic rounded-full w-24 h-24 md:w-32 md:h-32 bg-cover bg-center border-4 border-white'>
                                {/* <img src="/profile-pic.jpg" alt="Profile Picture" width={120} height={120} className='object-cover border-4 border-white rounded-full shadow-md' /> */}
                            </div>
                            <div className='text-xl md:text-3xl font-poppins font-semibold'>
                                Sudarshan Trifaley
                                <div className='flex justify-between items-center gap-3 w-[80%] lg:w-[70%] mt-2'>
                                    <a href='https://github.com/sudarshan24-byte' target='_blank'
                                        className='flex items-center gap-2 text-sm text-white bg-red-600 p-2 rounded-full'><FaGithub /></a>
                                    <a href='https://linkedin.com/in/sudarshan-trifaley' target='_blank'
                                        className='flex items-center gap-2 text-sm text-white bg-blue-700 p-2 rounded-full'><TfiLinkedin /></a>
                                    <a href='https://kaggle.com/sudarshan24byte' target='_blank'
                                        className='flex items-center gap-2 text-sm text-white bg-sky-500 p-2 rounded-full'><FaKaggle /></a>
                                    <a href='https://x.com/sudarshan24byte?t=npkuFIUrDX9HU0WtbMWDog&s=09' target='_blank'
                                        className='flex items-center gap-2 text-sm text-white bg-green-700 p-2 rounded-full'><FaXTwitter /></a>
                                    <a href='https://leetcode.com/sudarshan24_byte/' target='_blank'
                                        className='flex items-center gap-2 text-sm text-white bg-amber-600 p-2 rounded-full'><SiLeetcode /></a>
                                </div>
                            </div>
                        </div>
                        <div className='hidden md:block'>
                            <button
                                onClick={download}
                                className='bg-highlight px-2 py-1 text-xl rounded-xl flex items-center justify-center gap-2 cursor-pointer'>
                                <BsFillPersonVcardFill />
                                <div>My Resume</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner