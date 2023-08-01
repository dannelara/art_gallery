import React from 'react';

const CollectionCard = ({ author, title, mainImageSrc, subSrcs }: { author: { img: string, name: string }, title: string, mainImageSrc: string, subSrcs: string[] }) => {
    return (
        <div className='flex flex-col gap-2 items-center max-w-[20.813rem] justify-center'>
            <div className='h-[20.625rem] overflow-hidden rounded-xl scale'>
                <img className='h-full w-full' src={mainImageSrc} alt={mainImageSrc + title} />
            </div>
            <div className='flex gap-4 w-full'>{subSrcs.slice(0, 2).map((src, i: number) =>
                <div key={src} className='h-24 w-1/3 rounded-2xl overflow-hidden scale'><img className='h-full w-full' src={src} alt={`${i}-${src}`} /></div>)}
                <div className='h-24 w-1/3 rounded-2xl overflow-hidden bg-purple flex items-center justify-center'>
                    <span className='text-color text-base font-semibold'>{subSrcs.length}+</span>
                </div>
            </div>
            <div className='flex w-full my-2'>
                <span className='text-color text-xl font-noraml'>{title}</span>
            </div>
            <div className='flex w-full gap-2'>
                <div className='h-6 overflow-hidden rounded-xl'><img className='w-full h-full' src={author.img} alt={author.img + author.name} /></div>
                <span className='text-color'>{author.name}</span>
            </div>
        </div>
    );
};

export default CollectionCard;