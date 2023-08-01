import React from 'react';

const Input = ({ type, placeholder }: { type: string, placeholder: string }) => {
    return (
        <div className='bg-white py-4 px-5 rounded-xl border-2 border-blue-600'>
            <input className='w-full h-full focus:outline-none' type={type} placeholder={placeholder} />
        </div>
    );
};

export default Input;