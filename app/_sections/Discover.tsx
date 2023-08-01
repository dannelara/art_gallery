import React from 'react';
import Section from '../_components/common/Section';
import Button from '../_components/common/Button';
import NFTCard from '../_components/common/NFTCard';
import RocketPurpleIcon from '_assets/icons/global/RocketPurpleIcon';
import EyeIcon from '_assets/icons/global/EyeIcon';

const Discover = () => {
    return (
        <Section padding>

            <div className='flex flex-col w-full'>
                <div className='flex flex-col gap-2 '>
                    <h1 className='section-heading'>Discover More NFTs</h1>
                    <div className='flex justify-between'>
                        <span className='section-subHeading'>Explore new trending NFTs</span>

                        <div className='hidden xmd:block'>
                            <Button text='See All' type='PRIMARY' icon={<EyeIcon />} variant='OUTLINED' />
                        </div>
                    </div>
                </div>
                <div className='w-full grid grid-cols-1 xmd:grid-cols-2 md:grid-cols-3 gap-5 my-10'>
                    <NFTCard title='Life on Edena' creator={{ img: "/images/globalImages/nft_creator.png", name: "NebulaKid" }} img='/images/globalImages/nft.png' price={{
                        price: 100,
                        highestBid: 100,
                        currency: 'ETH'
                    }} />
                    <NFTCard title='Life on Edena' creator={{ img: "/images/globalImages/nft_creator.png", name: "NebulaKid" }} img='/images/globalImages/nft.png' price={{
                        price: 100,
                        highestBid: 100,
                        currency: 'ETH'
                    }} />
                    <NFTCard title='Life on Edena' creator={{ img: "/images/globalImages/nft_creator.png", name: "NebulaKid" }} img='/images/globalImages/nft.png' price={{
                        price: 100,
                        highestBid: 100,
                        currency: 'ETH'
                    }} />

                </div>
                <div className='xmd:hidden'>
                    <Button text='See All' type='PRIMARY' icon={<RocketPurpleIcon />} variant='OUTLINED' />
                </div>
            </div>
        </Section>
    );
};

export default Discover;