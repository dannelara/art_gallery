import React from 'react';
import Section from '../_components/common/Section';
import Button from '../_components/common/Button';
import CustomImage from '_components/common/Image';
import Link from 'next/link';

const GetStarted = () => {
    return (
        <Section padding>
            <div className='h-full w-full flex flex-col xmd:flex-row gap-4'>
                <div className='flex flex-col gap-3 xmd:gap-5 xmd:flex-1'>
                    <h1 className='text-color text-2xl font-semibold md:text-3xl'>Third Perspective Gallery:</h1>
                    <span className='text-color text-base font-normal'>Unleash Your Artistic Vision - Join and Share Your Masterpieces!</span>
                    <div className='relative py-4 max-h-[22.313rem] aspect-square flex items-center justify-center xmd:hidden tilt'>
                        <CustomImage className='w-full h-full rounded-xl overflow-hidden border-2 border-white' src='/images/new/6.png' alt='heading' />
                    </div>
                    <Link href="/get-started"><Button text='Get Started' type='PRIMARY' variant='FILLED' /></Link>
                    <div className='flex gap-7 justify-between mt-10'>
                        <div className='flex flex-col'>
                            <span className='text-xl text-color font-bold'>240k+</span>
                            <span className='text-base font-normal text-color'>Master pieces</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-xl text-color font-bold'>240k+</span>
                            <span className='text-base font-normal text-color'>Artists</span>
                        </div>
                        <div className='flex flex-col'>
                            {/* <span className='text-xl text-color font-bold'>100k+</span>
                            <span className='text-base font-normal text-color'>Auctions</span> */}
                        </div>
                    </div>
                </div>
                <div className='hidden xmd:flex flex-1 items-center justify-center md:scale-no-border'>
                    <div className='py-2 w-full md:w-[30rem] aspect-square rounded-xl overflow-hidden tilt relative'>
                        <CustomImage className='w-full h-full rounded-xl overflow-hidden border-2 border-white' src='/images/new/6.png' alt='/images/new/6' />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default GetStarted;