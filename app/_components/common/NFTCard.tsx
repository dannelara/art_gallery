import React from 'react';

const NFTCard = ({ img, title, creator, price }: { img: string, title: string, creator: { img: string, name: string }, price: { price: number, highestBid: number, currency: string } }) => {
    return (
        <div className='bg-gray-500 max-w-sm overflow-hidden rounded-xl flex flex-col md:scale'>
            <div className='flex flex-1'>
                <img className='h-full w-full' src={img} alt="wdadwd" loading='lazy' />
            </div>

            <div className='bg-gray-500'>

                <div className='flex flex-2 py-6 px-7 flex-col'>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-white text-xl font-semibold'>{title}</h1>

                        <div className='flex w-full gap-3'>
                            <div className='h-6 aspect-square overflow-hidden rounded-xl'>
                                <img className='w-full h-full' src={creator.img} alt={creator.img + creator.name} loading='lazy' /></div>
                            <span className='text-white'>{creator.name}</span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-2 py-6 px-7 justify-between'>
                    <div className='flex flex-col'>
                        <span className='text-gray-500 font-normal text-xs'>Price</span>
                        <span className='text-white text-base font-normal'>{price.price} {price.currency}</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-gray-500 font-normal text-xs'>Highest Bid</span>
                        <span className='text-white text-base font-normal'>{price.highestBid} {price.currency}</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NFTCard;