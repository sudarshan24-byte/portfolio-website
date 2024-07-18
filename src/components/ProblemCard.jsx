import React from 'react'

const TruncateTitle = ({ title }) => {
    // Function to truncate title
    const truncate = (str, maxLength) => {
        if (str.length <= maxLength) return str;
        return str.slice(0, maxLength) + '...';
    };

    return (
        <div>
            <div className='hidden md:block'>{truncate(title, 25)}</div>
            <div className='block md:hidden'>{truncate(title, 15)}</div>
        </div>
    );
};

const ProblemCard = ({ title, link, type, tag }) => {
    return (
        <a href={link} target='_blank'>
            <div className='bg-secondary px-5 py-3 rounded-md mt-5 flex justify-between items-center'>
                <div className='flex items-center'>
                    <div className='xs:text-xs md:text-md'>
                        <TruncateTitle title={title} />
                    </div>
                    <div
                        className={`text-[0.5rem] md:text-xs mx-2 md:mx-3 px-1 rounded-sm ${type === 'Medium' ? 'text-amber-500 bg-amber-400/15' :
                            type === 'Easy' ? 'text-green-500 bg-green-400/15' :
                                'text-red-500 bg-red-400/15'
                            }`}
                    >
                        {type}</div>
                </div>
                <div className='text-highlight bg-highlight/10 px-1 rounded-sm'>{tag}</div>
            </div>
        </a >
    )
}

export default ProblemCard