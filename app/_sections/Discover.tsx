import React from 'react';
import Section from '../_components/common/Section';
import Button from '../_components/common/Button';
import ArtCard from '../_components/common/ArtCard';
import RocketPurpleIcon from '_assets/icons/global/RocketPurpleIcon';
import EyeIcon from '_assets/icons/global/EyeIcon';

const Discover = () => {
    return (
        <Section padding>

            <div className='flex flex-col w-full'>
                <div className='flex flex-col gap-2 '>
                    <h1 className='section-heading'>Discover More Art</h1>
                    <div className='flex justify-between'>
                        <span className='section-subHeading'>Explore new trending arts</span>

                        <div className='hidden xmd:block'>
                            <Button text='See All' type='PRIMARY' icon={<EyeIcon />} variant='OUTLINED' />
                        </div>
                    </div>
                </div>
                <div className='w-full grid grid-cols-1 xmd:grid-cols-2 md:grid-cols-3 gap-5 my-10'>
                    <ArtCard title='Eden' creator={{ img: "/images/new/13.png", name: "Rahiros" }} img='/images/new/12.png' details={{
                        createdAt: new Date(new Date().setFullYear(new Date().getFullYear() - 10)),

                        monthlyUpload: 50,
                    }} />
                    <ArtCard title='--' creator={{ img: "/images/new/11.jpg", name: "Salomon" }} img='/images/new/7.png' details={{
                        createdAt: new Date(new Date().setFullYear(new Date().getFullYear() - 5)),
                        monthlyUpload: 32,
                    }} />
                    <ArtCard title='Gazer_1' creator={{ img: "/images/new/11.jpg", name: "Salomon" }} img='/images/new/11.jpg' details={{
                        createdAt: new Date(),
                        monthlyUpload: 21,
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