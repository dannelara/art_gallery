import React from 'react';
import Section from '../common/Section';
import CollectionCard from '../common/CollectionCard';
import { artists } from '../../../mockData';
const Trending = () => {

    return (
        <Section padding>
            <div className='flex flex-col'>
                <div className='flex flex-col gap-2'>
                    <h1 className='section-heading'>Trending Collection</h1>
                    <span className='section-subHeading'>Checkout our weekly updated trending collection.</span>
                </div>
                <div className='mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
                    {
                        artists.map((artist, index) => (
                            <CollectionCard key={index} author={{ img: artist.hero, name: artist.name }} images={artist.details.images} title={"In doors"} />
                        ))
                    }
                </div>
            </div>
        </Section>
    );
};

export default Trending;