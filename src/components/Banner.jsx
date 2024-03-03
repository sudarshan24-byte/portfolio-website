import React from 'react'
import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaGithub, FaKaggle, FaLinkedin } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";

const Menu = () => {
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
                                <div className='flex justify-between items-center w-[80%] lg:w-[70%] mt-2'>
                                    <a href='https://github.com/sudarshan24-byte' target='_blank'
                                        className='flex items-center gap-2 text-sm text-white bg-teal-500 p-2 rounded-full'><FaGithub /></a>
                                    <a href='https://linkedin.com/in/sudarshan-trifaley' target='_blank'
                                        className='flex items-center gap-2 text-sm text-white bg-blue-700 p-2 rounded-full'><TfiLinkedin /></a>
                                    <a href='https://kaggle.com/sudarshan24byte' target='_blank'
                                        className='flex items-center gap-2 text-sm text-white bg-sky-500 p-2 rounded-full'><FaKaggle /></a>
                                    <a href='https://twitter.com/CodeRush24?t=FZf3YAwEwVA9ZlfcxIcJGA&s=09' target='_blank'
                                        className='flex items-center gap-2 text-sm text-white bg-amber-600 p-2 rounded-full'><FaXTwitter /></a>
                                </div>
                            </div>
                        </div>
                        <div className='hidden md:block'>
                            <button className='bg-highlight px-2 py-1 text-xl rounded-xl flex items-center justify-center gap-2 cursor-pointer'>
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

export default Menu