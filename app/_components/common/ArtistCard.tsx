import React from 'react';
import CustomImage from './Image';

const ArtistCard = ({ hero, name, sales, }: { hero: string, name: string, sales: { amount: number, currency: string } }) => {
    return (
        <div className='p-5 flex gap-5 bg-gray-500 rounded-2xl md:flex-col md:items-center md:scale md:w-full'>
            <div className='relative h-12 md:h-28 aspect-square rounded-full overflow-hidden'>
                <CustomImage className='h-full w-full' src={`${hero}`} alt={`${hero}`} />
            </div>
            <div className='flex flex-col gap-1'>
                <h2 className='text-white text-xl font-semibold'>{name}</h2>
                <div className='flex gap-1'>
                    <span className='text-gray-500 text-base'>Images:</span>
                    <span className='text-white text-base'>{sales.amount}</span>
                </div>
            </div>
        </div>
    );
};

export default ArtistCard;