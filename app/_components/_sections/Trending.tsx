import React from 'react';
import Section from '../common/Section';
import CollectionCard from '../common/CollectionCard';

const Trending = () => {
    return (
        <Section padding>
            <div className='flex flex-col'>
                <div className='flex flex-col gap-2'>
                    <h1 className='section-heading'>Trending Collection</h1>
                    <span className='section-subHeading'>Checkout our weekly updated trending collection.</span>
                </div>
                <div className='mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
                    <CollectionCard author={{ img: "/images/new/11.jpg", name: "Salomon" }} mainImageSrc='/images/new/2.png' title='In doors' subSrcs={["/images/new/7.png", "/images/new/11.jpg", "/images/new/5.png", "/images/globalImages/cat.png"]} />
                    <CollectionCard author={{ img: "/images/new/13.png", name: "Rahiros" }} mainImageSrc='/images/new/8.png' title='Imagination' subSrcs={["/images/new/3.png", "/images/new/5.png", "/images/new/5.png", "/images/globalImages/cat.png"]} />
                    <CollectionCard author={{ img: "/images/new/1.png", name: "DayBreaker" }} mainImageSrc='/images/new/14.png' title='Future' subSrcs={["/images/new/6.png", "/images/new/1.png", "/images/globalImages/cat.png"]} />
                </div>
            </div>
        </Section>
    );
};

export default Trending;