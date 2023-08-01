import PageContent from '_components/global/PageContent';
import React from 'react';
import CustomImage from '_components/common/Image';
import { Artist } from '../../../types';
import Padding from '_components/utils/Padding';
import Section from '_components/common/Section';
import Button from '_components/common/Button';
import Instagram from '_assets/icons/global/Instagram';
import Discrod from '_assets/icons/global/Discrod';
import Tab from '_components/common/Tab';
import ArtCard from '_components/common/ArtCard';

const page = ({ params }: { params: { id: string } }) => {
    const { id } = params;

    const fetchArtist = async () => {
        const res = await fetch(`http://localhost:3000/api/artist?id=${id}`, {
            cache: 'no-cache',
        });
        return await res.json();
    };

    const artist = React.use(fetchArtist()) as Artist;

    return (
        <PageContent>
            <div className='flex flex-col w-full h-96 relative md:h-[30rem]'>
                <div className='w-full h-3/4 relative'>
                    <CustomImage src={artist.details.images[0].src} alt='_hero' className='w-full h-full' />
                    <div className='w-full h-full dark-gradient relative'></div>
                </div>
                <div className='w-full absolute bottom-0 h-2/6 flex justify-center md:justify-start'>

                    <Padding>
                        <div className='h-36 aspect-square relative rounded-xl overflow-hidden  bg-gray-500 mx-auto md:mx-0'>
                            <CustomImage alt='_hero' src={artist.hero} className='w-full p-1 h-full rounded-xl' />
                        </div>
                    </Padding>
                </div>
            </div>

            <Section>
                <Padding>
                    <div className='flex flex-col w-full gap-7'>
                        <div className='flex flex-col w-full gap-7 md:w-fit'>
                            <h1 className='text-color text-2xl font-semibold'>{artist.name}</h1>
                            <Button type='PRIMARY' variant='OUTLINED' text='Follow' />
                        </div>
                        <div className='flex w-full gap-12'>
                            <div>
                                <span className='text-color text-xl font-semibold'>
                                    {artist.details.images.length}
                                </span>
                                <p className='text-color text-base font-normal'>
                                    Images
                                </p>
                            </div>

                            <div>
                                <span className='text-color text-xl font-semibold'>
                                    {artist.followers}
                                </span>
                                <p className='text-color text-base font-normal '>
                                    Followers
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className='text-gray-500 text-base font-normal'>Bio</h2>
                            <span className='text-color'>The internet's friendliest kid.</span>
                        </div>

                        <div>
                            <h2 className='text-gray-500 text-base font-normal'>Socia media</h2>

                            <div className='flex gap-2 py-2'>
                                <div className='cursor-pointer'>
                                    <Instagram />
                                </div>
                                <div className='cursor-pointer'>
                                    <Discrod />

                                </div>
                            </div>
                        </div>
                    </div>
                </Padding>
            </Section>

            <Section>
                <Padding>
                    <div className='divider-bottom'></div>
                    <div className='flex flex-col w-full gap-7'>
                        <div className='flex justify-between'>
                            <Tab text='Images' number={artist.details.images.length} />
                        </div>
                    </div>

                    <div className='mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 smd:grid-cols-3 md:grid-cols-4 my-10 w-full'>
                        {artist.details.images.map((image, __) => (
                            <ArtCard key={image.src} title={image.title} creator={{ img: artist.hero, name: artist.name }} img={image.src} details={{
                                createdAt: artist.createdAt,
                                monthlyUpload: artist.monthlyUpload,
                            }} />
                        ))}
                    </div>
                </Padding>

            </Section>
        </PageContent>
    );
};

export default page;