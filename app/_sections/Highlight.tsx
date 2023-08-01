import React from 'react';
import Section from '../_components/common/Section';
import ArtistCard from '_components/common/ArtistCard';
import Button from '_components/common/Button';
import EyeIcon from '_assets/icons/global/EyeIcon';

const Highlight = () => {
    return (
        <Section>
            <div className='flex flex-col w-full max-h-screen relative h-screen'>
                <div className='w-full h-full bg-contain absolute inset-0'>
                    <picture className='flex w-full h-full'>
                        <source media='(min-width: 1050px)' srcSet="/images/globalImages/mushroomBig.png" type="image/png" />
                        <source srcSet="/images/globalImages/mushroom.png" type="image/png" />
                        <img className='w-full h-full object-fill md:object-cover' src="/images/globalImages/mushroomBig.png" alt="mushroom" />
                    </picture>
                </div>

                <div className='flex flex-col items-center justify-center w-full h-full bg-gradient-to-b from-purple-gradient-start to-purple-gradient-end z-20'>
                    <div className='flex flex-col px-10 pt-32 pb-10 w-full h-full gap-7 justify-center'>
                        <div>
                            <ArtistCard hero='images/avatars/image_one.png' name='Keepitreal' sales={{
                                amount: 100,
                                currency: 'ETH'
                            }} />
                        </div>
                        <div className='md:hidden'>
                            <h1 className='text-white text-3xl font-semibold'>
                                Magic Mashrooms
                            </h1>
                        </div>

                        <div className='bg-gray-treansparent w-full p-7 rounded-xl gap-2'>
                            <h2 className='text-xs font-normal text-white'>
                                Auction ends in:
                            </h2>
                            <div className='flex justify-between'>
                                <div>
                                    <span className='text-white text-3xl font-semibold'>
                                        59
                                    </span>
                                    <p className='text-xs font-normal text-white'>
                                        Hours
                                    </p>
                                </div>
                                <div className='text-3xl text-white'>:</div>
                                <div>
                                    <span className='text-white text-3xl font-semibold'>
                                        59
                                    </span>
                                    <p className='text-xs font-normal text-white'>
                                        Minutes
                                    </p>
                                </div>
                                <div className='text-3xl text-white'>:</div>
                                <div>
                                    <span className='text-white text-3xl font-semibold'>
                                        59
                                    </span>
                                    <p className='text-xs font-normal text-white'>
                                        Seconds
                                    </p>
                                </div>
                            </div>
                            <div className='pt-10'>
                                <h1 className='hidden md:block text-white text-3xl font-semibold'>
                                    Magic Mashrooms
                                </h1>
                                <Button text='See NFT' type='SECONDARY' variant='FILLED' icon={<EyeIcon />} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </Section>
    );
};

export default Highlight;