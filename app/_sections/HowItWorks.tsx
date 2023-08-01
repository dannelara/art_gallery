import CardIcon from '_assets/icons/InfoCardsIcons/CardIcon';
import InfoCard from '_components/common/InfoCard';
import Section from '_components/common/Section';
import React from 'react';

const HowItWorks = () => {
    return (
        <Section padding>
            <div className='flex flex-col'>
                <div className='flex flex-col gap-2'>
                    <h1 className='section-heading'>How it works</h1>
                    <span className='section-subHeading'>Find out how to get started</span>
                </div>
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-5 my-10'>
                <InfoCard link='#' logo={<CardIcon />} title='Setup Your account' desc='Set up your account of choice. Connect it to the NFT market by clicking the account icon in the top right corner.' />
                <InfoCard link='#' logo={<CardIcon />} title='Setup Your account' desc='Set up your account of choice. Connect it to the NFT market by clicking the account icon in the top right corner.' />
                <InfoCard link='#' logo={<CardIcon />} title='Setup Your account' desc='Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.' />
            </div>
        </Section>
    );
};

export default HowItWorks;