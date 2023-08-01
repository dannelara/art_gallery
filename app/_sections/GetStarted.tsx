import React from 'react';
import Section from '../_components/common/Section';
import Button from '../_components/common/Button';
import RocketIcon from '_assets/icons/global/RocketIcon';

const GetStarted = () => {
    return (
        <Section padding>
            <div className='h-full w-full flex flex-col xmd:flex-row gap-4'>
                <div className='flex flex-col gap-3 xmd:gap-5 xmd:flex-1'>
                    <h1 className='text-color text-2xl font-semibold md:text-3xl'>Discover digital art & Collect NFTs</h1>
                    <span className='text-color text-base font-normal'>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</span>
                    <div className='py-2 h-[22.313rem] flex items-center justify-center xmd:hidden'>
                        <img className='w-full h-full max-w-[20rem] ' src='/images/globalImages/animatedImage.gif' loading='lazy' />
                    </div>
                    <Button icon={<RocketIcon />} text='Get Started' type='PRIMARY' variant='FILLED' />
                    <div className='flex gap-7 justify-between mt-10'>
                        <div className='flex flex-col'>
                            <span className='text-xl text-color font-bold'>240k+</span>
                            <span className='text-base font-normal text-color'>Total Sale</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-xl text-color font-bold'>100k+</span>
                            <span className='text-base font-normal text-color'>Auctions</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-xl text-color font-bold'>240k+</span>
                            <span className='text-base font-normal text-color'>Artists</span>
                        </div>
                    </div>
                </div>
                <div className='hidden xmd:flex flex-1 items-center justify-center'>
                    <div className='py-2 max-w-[30rem]'>
                        <img className='w-full h-full' src='/images/globalImages/animatedImage.gif' loading='lazy' />
                    </div>
                </div>
            </div>
        </Section>

    );
};

export default GetStarted;