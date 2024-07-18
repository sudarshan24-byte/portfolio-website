import React from 'react'

const SuccessAlert = ({ visible, onClose, message, color, bgcolor }) => {
    return (
        <div className={`fixed top-0 left-0 right-0 z-50 ${visible ? 'block' : 'hidden'}`}>
            <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded sticky' role="alert">
                <strong className="font-bold">Success! </strong>
                <span className="block sm:inline">
                    {message}
                </span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={onClose}>
                    <svg className={`fill-current h-6 w-6 text-${color}-500`} role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <title>Close</title>
                        <path d="M14.348 14.849a1 1 0 0 1-1.415 0L10 11.414l-2.929 2.93a1 1 0 1 1-1.414-1.414L8.586 10 5.657 7.071a1 1 0 0 1 1.414-1.414L10 8.586l2.929-2.93a1 1 0 0 1 1.414 1.414L11.414 10l2.93 2.929a1 1 0 0 1 0 1.42z" />
                    </svg>
                </span>
            </div>
        </div>
    );
}

export default SuccessAlert