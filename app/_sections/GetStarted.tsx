import React from 'react';
import Section from '../_components/common/Section';
import Button from '../_components/common/Button';
import RocketIcon from '_assets/icons/global/RocketIcon';

const GetStarted = () => {
    return (
        <Section padding>
            <div className='h-full w-full flex flex-col xmd:flex-row gap-4'>
                <div className='flex flex-col gap-3 xmd:gap-5 xmd:flex-1'>
                    <h1 className='text-color text-2xl font-semibold md:text-3xl'>Third Perspective Gallery:</h1>
                    <span className='text-color text-base font-normal'>Unleash Your Artistic Vision - Join and Share Your Masterpieces!</span>
                    <div className='py-4 h-[22.313rem] flex items-center justify-center xmd:hidden'>
                        <img className='w-full h-full rounded-xl overflow-hidden border-2 border-white tilt' src='/images/new/6.png' loading='lazy' />
                    </div>
                    <Button icon={<RocketIcon />} text='Get Started' type='PRIMARY' variant='FILLED' />
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
                    <div className='py-2 max-w-[30rem] rounded-xl overflow-hidden tilt'>
                        <img className='w-full h-full rounded-xl overflow-hidden border-2 border-white' src='/images/new/6.png' loading='lazy' />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default GetStarted;