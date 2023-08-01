import React from 'react';

const Padding = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
        <div className='px-12 md:px-32'>
            {children}
        </div>
    );
};

export default Padding;