import React from 'react';
import CustomImage from './Image';
import Link from 'next/link';

const ArtCard = ({ id, img, title, creator, details, noDetails, dark }: {
    id: number,
    img: string, title: string, creator: { img: string, name: string }, details: {
        createdAt: Date, monthlyUpload: number
    }, noDetails?: boolean, dark?: boolean
}) => {
    return (
        <Link href={`/artwork/${id}`} className='w-full h-fit'>
            <div className={`${dark ? "bg-gray-600" : "bg-gray-500"} w-full overflow-hidden rounded-xl flex flex-col md:scale max-w-[25rem]`}>
                <div className='w-full aspect-square overflow-hidden rounded-xl relative md:scale-no-border'>
                    <CustomImage className='h-full w-full p-1 rounded-xl' src={img} alt={title} />
                </div>
                <div className=''>
                    <div className='flex flex-2 py-6 px-7 flex-col'>
                        <div className='flex flex-col gap-1'>
                            <h1 className='text-white text-xl font-semibold'>{title}</h1>
                            <div className='flex w-full gap-3'>
                                <div className='h-6 aspect-square overflow-hidden rounded-xl relative'>
                                    <CustomImage className='w-full h-full' src={creator.img} alt={creator.img + creator.name} />
                                </div>
                                <span className='text-white'>{creator.name}</span>
                            </div>
                        </div>
                    </div>

                    <div className={`${noDetails ? "hidden" : "flex"} flex-2 py-6 px-7 justify-between`}>
                        <div className='flex flex-col'>
                            <span className='text-gray-500 font-normal text-xs'>Active since</span>
                            <span className='text-white text-base font-normal'>{new Date(details.createdAt).getFullYear()}</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-gray-500 font-normal text-xs'>Monthly uploads</span>
                            <span className='text-white text-base font-normal'>{details.monthlyUpload}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ArtCard;