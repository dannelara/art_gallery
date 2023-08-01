import Button from '_components/common/Button';
import CustomImage from '_components/common/Image';
import Input from '_components/global/Input';
import PageContent from '_components/global/PageContent';
import React from 'react';

const page = () => {
    return (
        <PageContent>
            <div className='flex flex-col w-full min-h-[40rem] md:flex-row mt-9'>
                <div className='flex-1 relative'>
                    {/* <CustomImage alt='formImage' className='h-full w-full' src='/images/new/12.png' /> */}
                </div>
                <div className='flex-1 flex flex-col gap-10 p-6 md:px-12'>
                    <div>
                        <h1 className='section-heading'>Create Your Account</h1>
                    </div>
                    <div>
                        <span className='section-subHeading'>Welcome! Enter your details and start shearing your art with the community.</span>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Input type='text' placeholder='Username' required />
                        <Input type='email' placeholder='E-mail' required />
                        <Input type='password' placeholder='Password' required />
                        <Input type='password' placeholder='Confirm Password' required />
                    </div>
                    <div>
                        <Button type='PRIMARY' text='Create Account' variant='FILLED' />
                    </div>
                </div>
            </div>

        </PageContent>
    );
};

export default page;