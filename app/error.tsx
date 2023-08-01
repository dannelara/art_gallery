"use client"
import Section from '_components/common/Section';
import PageContent from '_components/global/PageContent';
import React from 'react';

const error = () => {
    return (
        <PageContent>
            <Section>
                <div className='w-full h-full flex items-center justify-center mt-16'>
                    <h1 className='text-color text-2xl'>
                        Something went wrong, please try again later.
                    </h1>
                </div>
            </Section>
        </PageContent>
    );
};

export default error;