import React from 'react';
import CustomImage from './Image';
import { Artwork } from '../../../types';
import Link from 'next/link';

const CollectionCard = ({ author, title, images }: { author: { img: string, name: string }, title: string, images: Artwork[] }) => {
    return (
        < div className='flex flex-col gap-4 items-center justify-center max-w-[25rem]' >
            <div className='w-full aspect-square overflow-hidden rounded-xl relative md:scale '>
                <Link href={`/artwork/${images[0].id}`} className='block'>
                    <CustomImage className='h-full w-full' src={images[0].src} alt={images[0].src} />
                </Link>
            </div>
            <div className='flex gap-4 w-full'>
                {images.slice(1, 3).map((img, i: number) =>
                    <div key={img.src} className='relative w-28 aspect-square rounded-2xl overflow-hidden md:scale'>
                        <Link href={`/artwork/${img.id}`} className='block'>
                            <CustomImage className='h-full w-full' src={img.src} alt={`${i}-${img.src}`} />
                        </Link>
                    </div>
                )}
                <div className='w-28 aspect-square rounded-2xl overflow-hidden bg-blue-600 flex items-center justify-center'>
                    <span className='text-color text-base font-semibold'>{images.length}+</span>
                </div>
            </div>
            <div className='flex w-full my-2'>
                <span className='text-color text-xl font-noraml'>{title}</span>
            </div>
            <div className='flex w-full gap-2'>
                <div className='relative h-6 aspect-square overflow-hidden rounded-xl'>
                    <CustomImage className='h-full w-full' src={author.img} alt={author.img + author.name} />
                </div>
                <span className='text-color'>{author.name}</span>
            </div>
        </div>
    );
};

export default CollectionCard;