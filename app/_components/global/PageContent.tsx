import React from 'react';

const PageContent = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
        <main className='flex h-full flex-col items-center justify-between bg-white dark:bg-gray-600'>
            {children}
        </main>
    );
};

export default PageContent;