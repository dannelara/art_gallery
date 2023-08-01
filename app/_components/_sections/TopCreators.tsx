import React from 'react';
import Section from '../common/Section';
import Button from '../common/Button';
import ArtistCard from '../common/ArtistCard';
import { Artist } from '../../../types';

type Props = {
    artists: Artist[];

}

const TopCreators = ({ artists = [] }: Props) => {
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
                        artists.slice(0, 12).map((artist, index) => (
                            <ArtistCard key={artist.id} hero={artist.hero} name={artist.name} details={artist.details} id={artist.id} createdAt={artist.createdAt} followers={artist.followers} monthlyUpload={artist.monthlyUpload} />
                        ))
                    }
                </div>
                <div className='xmd:hidden'>
                    <Button text='View Rankings' type='PRIMARY' variant='OUTLINED' />
                </div>
            </div>
        </Section >
    );
};

export default TopCreators;