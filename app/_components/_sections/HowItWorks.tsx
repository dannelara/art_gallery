import CardIcon from '_assets/icons/InfoCardsIcons/CardIcon';
import InfoCard from '_components/common/InfoCard';
import Section from '_components/common/Section';
import React from 'react';

const HowItWorks = () => {
    return (
        <Section padding>
            <div className='flex flex-col'>
                <div className='flex flex-col gap-2'>
                    <h1 className='section-heading'>Share Your Art!</h1>
                    <span className='section-subHeading'>Learn how to get started</span>
                </div>
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-5 my-10'>
                <InfoCard link='#' logo={<CardIcon />} title='Setup Your Account' desc='Set up your account of by clicking the Getting Started button at the start of the page.' />
                <InfoCard link='#' logo={<CardIcon />} title='Share Your Art' desc='Share your art by uploading them in your account page.' />
                <InfoCard link='#' logo={<CardIcon />} title='Manage Your Content' desc='Manage your art and account in the account page.' />
            </div>
        </Section>
    );
};

export default HowItWorks;