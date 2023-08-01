import React from 'react';

const ArtistCard = ({ hero, name, sales, }: { hero: string, name: string, sales: { amount: number, currency: string } }) => {
    return (
        <div className='p-5 flex gap-5 bg-gray-500 rounded-2xl md:flex-col md:items-center scale'>
            <div className='w-[3.75rem] md:w-[7.5rem] aspect-square rounded-full overflow-hidden'>
                <img className='h-auto w-full' src={hero} alt={`${hero}`} />
            </div>
            <div className='flex flex-col gap-1'>
                <h2 className='text-white text-xl font-semibold'>{name}</h2>
                <div className='flex gap-1'>
                    <span className='text-gray-500 text-base'>Total Sales:</span>
                    <span className='text-white text-base'>{sales.amount} {sales.currency}</span>
                </div>
            </div>
        </div>
    );
};

export default ArtistCard;