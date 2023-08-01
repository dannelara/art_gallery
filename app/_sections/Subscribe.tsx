import Button from '_components/common/Button';
import Input from '_components/common/Input';
import Section from '_components/common/Section';
import React from 'react';

const Subscribe = () => {
    return (
        <Section>
            <div className='mx-6 md:mx-32 flex flex-col w-full gap-7 md:flex-row bg-gray-500 p-5 md:p-14 rounded-xl'>
                <div className='w-full h-full flex md:flex-1'>
                    <div className='h-60 w-full bg-purple rounded-xl md:h-full'></div>
                </div>

                <div className='flex flex-col gap-8 md:flex-1'>
                    <div className='w-full flex flex-col gap-2'>
                        <h1 className='text-white text-2xl font-semibold'>Join our weekly digest</h1>
                        <span className='text-white'>Get exclusive promotions & updates straight to your inbox.</span>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <Input type='text' placeholder='Enter Your Email Address' />
                        <Button type='PRIMARY' variant='FILLED' text='Subscribe' />
                    </div>
                </div>
            </div>

        </Section>
    );
};

export default Subscribe;