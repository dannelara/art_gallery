import React from 'react';
import Section from '../common/Section';
import ArtistCard from '_components/common/ArtistCard';
import Button from '_components/common/Button';
import CustomImage from '_components/common/Image';

const Highlight = () => {
    return (
        <Section>
            <div className='flex flex-col w-full max-h-screen relative h-screen'>
                <div className='w-full h-full bg-contain absolute inset-0'>
                    <picture className='flex w-full h-full'>
                        <source media='(min-width: 1050px)' srcSet="images/new/7.png" type="image/png" />
                        <source srcSet="images/new/7.png" type="image/png" />
                        <CustomImage className='w-full h-full' alt='COVER_BIG' src='/images/new/7.png' />
                    </picture>
                </div>
                <div className='flex flex-col items-center justify-center w-full h-full dark-gradient z-20'>
                    <div className='flex flex-col px-6 md:px-12 pt-32 pb-10 w-full h-full gap-7 justify-center md:flex-row md:h-fit'>
                        <div className='flex md:flex-1'>
                            <ArtistCard id={1} hero='/images/new/11.jpg' name='Salomon' details={{
                                images: [
                                    { src: '/images/new/7.png', title: 'Eden' },
                                    { src: '/images/new/7.png', title: 'Eden' },
                                    { src: '/images/new/7.png', title: 'Eden' },
                                    { src: '/images/new/7.png', title: 'Eden' },
                                ]
                            }}
                                followers={313}
                                createdAt={new Date()}
                                monthlyUpload={10}
                            />
                        </div>

                        <div className='md:hidden'>
                            <h1 className='text-white text-3xl font-semibold'>
                                Gazer_1
                            </h1>
                        </div>

                        <div className='bg-gray-treansparent w-full p-7 rounded-xl gap-2 md:flex-1'>
                            <h2 className='text-xs font-normal text-white'>
                                This weeks top art:
                            </h2>
                            <div className='flex justify-between md:w-fit'>
                                <div>
                                    <span className='text-white text-3xl font-semibold'>
                                        99999
                                    </span>
                                    <p className='text-xs font-normal text-white'>
                                        Votes
                                    </p>
                                </div>
                            </div>
                            <div className='pt-10 md:flex md:flex-col md:gap-7 md:w-fit'>
                                <h1 className='hidden md:block text-white text-3xl font-semibold'>
                                    Gazer_1
                                </h1>
                                <Button text='See Art' type='SECONDARY' variant='FILLED' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </Section>
    );
};

export default Highlight;