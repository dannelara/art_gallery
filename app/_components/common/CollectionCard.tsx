import React from 'react';
import CustomImage from './Image';

const CollectionCard = ({ author, title, mainImageSrc, subSrcs }: { author: { img: string, name: string }, title: string, mainImageSrc: string, subSrcs: string[] }) => {
    return (
        <div className='flex flex-col gap-4 items-center justify-center max-w-[25rem]'>
            <div className='w-full aspect-square overflow-hidden rounded-xl relative md:scale '>
                <CustomImage className='h-full w-full' src={mainImageSrc} alt={mainImageSrc} />
            </div>
            <div className='flex gap-4 w-full'>
                {subSrcs.slice(0, 2).map((src, i: number) =>
                    <div key={src} className='relative w-28 aspect-square rounded-2xl overflow-hidden md:scale'>
                        <CustomImage className='h-full w-full' src={src} alt={`${i}-${src}`} />
                    </div>)
                }
                <div className='w-28 aspect-square rounded-2xl overflow-hidden bg-blue-600 flex items-center justify-center'>
                    <span className='text-color text-base font-semibold'>{subSrcs.length}+</span>
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