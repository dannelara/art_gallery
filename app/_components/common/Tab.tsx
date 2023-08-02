import React from 'react';

const Tab = ({ text, number }: { text: string, number: number }) => {
    return (
        <div className='flex items-center justify-center gap-4 cursor-pointer'>
            <span className='text-color text-base font-semibold'>{text}</span>
            <div className='bg-gray-400 px-4 rounded-lg hidden md:block'>
                <span className='text-sm font-normal text-white'>{number}</span>
            </div>
        </div>
    );
};

export default Tab;