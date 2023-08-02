import React from 'react';

const Tag = ({ text }: { text: string }) => {
    return (
        <div className='bg-gray-500 px-7 py-3 rounded-xl'>
            <span className='text-white text-base font-semibold'>{text}</span>
        </div>
    );
};

export default Tag;