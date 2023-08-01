import React from 'react';
import Section from '../_components/common/Section';
import Button from '../_components/common/Button';
import ArtistCard from '../_components/common/ArtistCard';
import { Artist } from '../../types';

type Props = {
    data: {
        artists: Artist[];
    };
}

const TopCreators = ({ data }: Props) => {
    console.log(data);
    return (
        <Section padding>
            <div className='flex flex-col w-full'>
                <div className='flex flex-col gap-2'>
                    <h1 className='section-heading'>Top creators</h1>
                    <div className='flex justify-between'>
                        <span className='section-subHeading' >Checkout Top Rated Creators</span>
                        <div className='hidden xmd:block'>
                            <Button text='View Rankings' type='PRIMARY' variant='OUTLINED' />
                        </div>
                    </div>
                </div>
                <div className='w-full grid grid-cols-1 xmd:grid-cols-2 md:grid-cols-4 gap-5 my-10'>
                    {
                        (data && data.artists) &&
                        data.artists.map((artist, index) => (
                            <ArtistCard hero={artist.hero} name={artist.name} details={artist.details} />
                        ))
                    }
                    {/* {
                        artists &&  artists.map((artist, index) => (
                    <ArtistCard hero='/images/new/11.jpg' name='Salomon' details={{
                        images: [
                            { src: '/images/new/7.png', title: 'Eden' },
                            { src: '/images/new/7.png', title: 'Eden' },
                            { src: '/images/new/7.png', title: 'Eden' },
                            { src: '/images/new/7.png', title: 'Eden' },
                        ]
                    }} />
                    ))
                    } */}
                    {/* 
                    <ArtistCard hero='/images/new/13.png' name='Rahiros' details={{
                        images: [
                            { src: '/images/new/7.png', title: 'Eden' },
                            { src: '/images/new/7.png', title: 'Eden' },
                            { src: '/images/new/7.png', title: 'Eden' },
                            { src: '/images/new/7.png', title: 'Eden' },
                        ]
                    }} />

                    <ArtistCard hero='/images/new/1.png' name='DayBreaker' details={{
                        images: [
                            { src: '/images/new/7.png', title: 'Eden' },
                            { src: '/images/new/7.png', title: 'Eden' },
                            { src: '/images/new/7.png', title: 'Eden' },
                            { src: '/images/new/7.png', title: 'Eden' },
                        ]
                    }} /> */}
                </div>
                <div className='xmd:hidden'>
                    <Button text='View Rankings' type='PRIMARY' variant='OUTLINED' />
                </div>
            </div>
        </Section >
    );
};

export default TopCreators;