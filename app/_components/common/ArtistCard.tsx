import React from 'react';
import CustomImage from './Image';
import Link from 'next/link';
import { Artist } from '../../../types';

const ArtistCard = ({ id, hero, name, details, noDetails, small }: Artist & { noDetails?: boolean, small?: boolean }) => {
    return (
        <Link href={`/artist/${id}`} className='w-full h-fit'>
            <div className={`flex gap-5 ${small ? "" : "p-5 bg-gray-500 rounded-2xl md:flex-col md:items-center md:scale md:w-full h-full"}`}>
                <div className={`relative h-12 aspect-square rounded-full overflow-hidden ${small ? "" : " md:h-28 max-w-2xl"}`}>
                    <CustomImage className='h-full w-full' src={`${hero}`} alt={`${hero}`} />
                </div>
                <div className={`${noDetails ? "hidden" : "flex"} flex-col gap-1 `}>
                    <h2 className={`text-white ${small ? "text-base" : "text-xl font-semibold"}`}>{name}</h2>
                    <div className={`${small ? "hidden" : "flex gap-1"}`}>
                        <span className='text-gray-500 text-base'>Images:</span>
                        <span className='text-white text-base'>{details.images.length}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ArtistCard;