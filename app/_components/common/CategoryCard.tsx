import React from 'react';

const CategoryCard = ({ img, icon, title }: { img: string, icon: React.ReactNode, title: string }) => {
    return (
        <div className='flex flex-col rounded-xl overflow-hidden scale'>
            <div className='relative w-full'>
                <img className='inset-0 blur-sm' src={img} alt={img} loading='lazy' />
                <div className='h-full w-full absolute inset-0 flex items-center justify-center'>{icon}</div>
            </div>
            <div className='bg-gray-500 flex-1 flex p-5'>
                <span className='text-white text-base font-semibold'>{title}</span>
            </div>
        </div>
    );
};

export default CategoryCard;