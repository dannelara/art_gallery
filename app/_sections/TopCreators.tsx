import React from 'react';
import Section from '../_components/common/Section';
import Button from '../_components/common/Button';
import ArtistCard from '../_components/common/ArtistCard';
import RocketPurpleIcon from '_assets/icons/global/RocketPurpleIcon';

const TopCreators = () => {
    return (
        <Section padding>
            <div className='flex flex-col w-full'>
                <div className='flex flex-col gap-2'>
                    <h1 className='section-heading'>Top creators</h1>
                    <div className='flex justify-between'>
                        <span className='section-subHeading' >Checkout Top Rated Creators on the NFT Marketplace</span>
                        <div className='hidden xmd:block'>
                            <Button text='View Rankings' type='PRIMARY' icon={<RocketPurpleIcon />} variant='OUTLINED' />
                        </div>
                    </div>
                </div>
                <div className='w-full grid grid-cols-1 xmd:grid-cols-2 md:grid-cols-4 gap-5 my-10'>
                    <ArtistCard hero='/images/new/11.jpg' name='Salomon' sales={{
                        amount: 500,
                        currency: 'ETH'
                    }} />
                    <ArtistCard hero='/images/new/13.png' name='Rahiros' sales={{
                        amount: 230,
                        currency: 'ETH'
                    }} />

                    <ArtistCard hero='/images/new/1.png' name='DayBreaker' sales={{
                        amount: 200,
                        currency: 'ETH'
                    }} />
                </div>
                <div className='xmd:hidden'>
                    <Button text='View Rankings' type='PRIMARY' icon={<RocketPurpleIcon />} variant='OUTLINED' />
                </div>
            </div>
        </Section >
    );
};

export default TopCreators;