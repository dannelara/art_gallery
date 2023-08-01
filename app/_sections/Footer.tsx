
import Discrod from '_assets/icons/global/Discrod';
import Instagram from '_assets/icons/global/Instagram';
import StoreIcon from '_assets/icons/global/StoreIcon';
import Padding from '_components/utils/Padding';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='flex h-auto w-full min-h-[30rem] bg-gray-500'>
            <div className='w-full mx-6 md:mx-12'>
                <div className='flex flex-col py-10 gap-5 md:flex-row md:gap-8'>
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-3'>
                            <h1 className='text-base md:text-xl text-white font-semibold'>TriVisionArt</h1>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='text-gray-paper'>Unleash Your Artistic Vision - Join and Share Your Masterpieces!</span>
                            <span className='text-gray-paper'>Join our community</span>
                            {/** MEDIA */}
                            <div className='flex gap-2 py-4'>
                                <div className='cursor-pointer'><Instagram /></div>
                                <div className='cursor-pointer'><Discrod /></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-base md:text-xl text-white font-semibold'>Explore</h1>
                        <ul className='flex flex-col gap-2 py-2'>
                            <li>
                                <Link className='link-secondary' href="#">
                                    Artists
                                </Link>
                            </li>
                            <li>
                                <Link className='link-secondary' href="#">
                                    Rankings
                                </Link>
                            </li>
                            <li>
                                <Link className='link-secondary' href="#">
                                    Explore
                                </Link>
                            </li>
                        </ul>
                    </div>


                </div >
                <div>
                    <div className='divider-bottom'></div>
                </div>
            </div>
        </div >
    );
};

export default Footer;