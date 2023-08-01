import React from 'react';

const Padding = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
        <div className='px-6 md:px-32 w-full'>
            {children}
        </div>
    );
};

export default Padding;