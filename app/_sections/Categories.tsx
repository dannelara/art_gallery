import React from 'react';
import Section from '../_components/common/Section';
import CategoryCard from '../_components/common/CategoryCard';
import BrushIcon from '_assets/icons/categories/BrushIcon';
import SwatchesIcon from '_assets/icons/categories/SwatchesIcon';
import MusicIcon from '_assets/icons/categories/MusicIcon';
import CameraIcon from '_assets/icons/categories/CameraIcon';
import VideoCamera from '_assets/icons/categories/VideoCamera';
import WandIcon from '_assets/icons/categories/WandIcon';
import BasketBallIcon from '_assets/icons/categories/BasketBallIcon';
import PlanetIcon from '_assets/icons/categories/PlanetIcon';

const Categories = () => {
    return (
        <Section padding>
            <div className='flex flex-col'>
                <div className='flex flex-col gap-2'>
                    <h1 className='section-heading'>Browse Categories</h1>
                </div>
                <div className='w-full grid grid-cols-2 xmd:grid-cols-4 md:grid-cols-5 gap-5 my-10'>
                    <CategoryCard title='Art' img='/images/globalImages/whale.png' icon={<BrushIcon />} />
                    <CategoryCard title='Collectibles' img='/images/globalImages/whale.png' icon={<SwatchesIcon />} />
                    <CategoryCard title='Music' img='/images/globalImages/whale.png' icon={<MusicIcon />} />
                    <CategoryCard title='Photography' img='/images/globalImages/whale.png' icon={<CameraIcon />} />
                    <CategoryCard title='Video' img='/images/globalImages/whale.png' icon={<VideoCamera />} />
                    <CategoryCard title='Utility' img='/images/globalImages/whale.png' icon={<WandIcon />} />
                    <CategoryCard title='Sport' img='/images/globalImages/whale.png' icon={<BasketBallIcon />} />
                    <CategoryCard title='Virtual Worlds' img='/images/globalImages/whale.png' icon={<PlanetIcon />} />
                </div>
            </div>
        </Section>
    );
};

export default Categories;