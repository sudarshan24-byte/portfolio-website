import React, { useState } from 'react'
import plate from '/AI-Images/OIG2.jpeg'
import { MdOutlineDoneAll } from "react-icons/md";
import Heading from '../components/Heading';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import SuccessTooltip from '../components/SuccessTooltip';
import SuccessAlert from '../components/SuccessAlert';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const [success, setSuccess] = useState(false)
    const [empty, setEmpty] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        const serviceId = 'service_coagapm';
        const templateId = 'template_h36v5tf';
        const publicKey = 'xw5S7BHDeCyIInH-q';

        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            to_name: 'Sudarshan Trifaley',
            message: message,
        };

        if (name == false || email == false || subject == false || message == false) {
            setEmpty(true)
            return alert('Please fill all the fields!')
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setName('');
                setEmail('');
                setMessage('');
                setSubject('')
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false);
            setEmpty(false)
        }, 10000);
    }

    const handleAlertClose = () => {
        setSuccess(false);
    };

    return (
        <>
            <SuccessAlert visible={success} onClose={handleAlertClose} color={'green'}
                message={'Your message has been sent! Thank You for contacting me. Will surely reach out to you. In the meantime, feel free to explore my portfolio.'} />

            <div className='bg-secondary text-white h-screen'>
                {/* <Heading title={'Contact Me'} /> */}
                <div className=' h-40 flex justify-center items-center'>
                    <div className='text-4xl'>
                        Contact Me
                        <div className='w-[50%] border border-highlight ml-auto mt-2'></div>
                    </div>
                </div>
                <div className='flex justify-center items-center bg-secondary text-white pb-10'>
                    <form action="" onSubmit={handleSubmit} className=''>
                        <div>
                            <div>
                                <input type="text" placeholder='Name' className='bg-primary w-80 md:w-96 h-14 rounded-lg p-4 focus:outline-none my-2' value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div>
                                <input type="text" placeholder='Email' className='bg-primary w-80 md:w-96 h-14 rounded-lg p-4 focus:outline-none my-2' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div>
                                <input type="text" placeholder='Subject' className='bg-primary w-80 md:w-96 h-14 rounded-lg p-4 focus:outline-none my-2' value={subject} onChange={(e) => setSubject(e.target.value)} />
                            </div>
                            <div>
                                <textarea name="" placeholder='Message' id="" cols="30" rows="10" className='bg-primary my-2 w-80 md:w-96 p-4 focus:outline-none rounded-lg' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                            </div>

                            <div className='flex justify-between items-center my-2'>
                                <input type="submit" value='Submit' id="submit" className='bg-highlight px-4 py-1 rounded-lg text-white cursor-pointer' />
                                <Link to='/' className='bg-[#323a96] px-4 py-1 rounded-lg text-white'>Home</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact