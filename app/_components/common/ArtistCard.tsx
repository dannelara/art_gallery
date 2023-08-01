import React from 'react';
import CustomImage from './Image';
import Link from 'next/link';
import { Artist } from '../../../types';

const ArtistCard = ({ id, hero, name, details, }: Artist) => {
    return (
        <Link href={`/artist/${id}`} className='w-full h-full'>
            <div className='p-5 flex gap-5 bg-gray-500 rounded-2xl md:flex-col md:items-center md:scale md:w-full h-full'>
                <div className='relative h-12 md:h-28 aspect-square rounded-full overflow-hidden  max-w-2xl'>
                    <CustomImage className='h-full w-full' src={`${hero}`} alt={`${hero}`} />
                </div>
                <div className='flex flex-col gap-1'>
                    <h2 className='text-white text-xl font-semibold'>{name}</h2>
                    <div className='flex gap-1'>
                        <span className='text-gray-500 text-base'>Images:</span>
                        <span className='text-white text-base'>{details.images.length}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ArtistCard;