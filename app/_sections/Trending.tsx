import React from 'react';
import Section from '../_components/common/Section';
import CollectionCard from '../_components/common/CollectionCard';

const Trending = () => {
    return (
        <Section padding>
            <div className='flex flex-col'>
                <div className='flex flex-col gap-2'>
                    <h1 className='section-heading'>Trending Collection</h1>
                    <span className='section-subHeading'>Checkout our weekly updated trending collection.</span>
                </div>
                <div className='mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
                    <CollectionCard author={{ img: "/images/globalImages/cat.png", name: "MrCat" }} mainImageSrc='/images/globalImages/dog.png' title='DSGN Animals' subSrcs={["/images/globalImages/cat.png", "/images/globalImages/robot.png", "/images/globalImages/cat.png", "/images/globalImages/cat.png"]} />
                    <CollectionCard author={{ img: "/images/globalImages/cat.png", name: "Shroom" }} mainImageSrc='/images/globalImages/dog.png' title='DSGN Animals' subSrcs={["/images/globalImages/robot.png", "/images/globalImages/cat.png", "/images/globalImages/cat.png", "/images/globalImages/cat.png"]} />
                    <CollectionCard author={{ img: "/images/globalImages/robot.png", name: "BeKind2Robots" }} mainImageSrc='/images/globalImages/robot.png' title='DSGN Animals' subSrcs={["/images/globalImages/robot.png", "/images/globalImages/cat.png", "/images/globalImages/cat.png", "/images/globalImages/cat.png"]} />
                </div>
            </div>
        </Section>
    );
};

export default Trending;