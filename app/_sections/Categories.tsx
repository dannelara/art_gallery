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
                    <CategoryCard title='Nature' img='/images/new/6.png' icon={<BrushIcon />} />
                    <CategoryCard title='Animals' img='/images/new/7.png' icon={<SwatchesIcon />} />
                    <CategoryCard title='Travel' img='/images/new/5.png' icon={<MusicIcon />} />
                    <CategoryCard title='Technology' img='/images/new/1.png' icon={<CameraIcon />} />
                    <CategoryCard title='Abstract' img='/images/new/11.jpg' icon={<WandIcon />} />
                    <CategoryCard title='People' img='/images/new/3.png' icon={<BasketBallIcon />} />
                    <CategoryCard title='Virtual' img='/images/new/14.png' icon={<PlanetIcon />} />
                </div>
            </div>
        </Section>
    );
};

export default Categories;