"use client"
import CustomImage from '_components/common/Image';
import Section from '_components/common/Section';
import PageContent from '_components/global/PageContent';
import React from 'react';
import { artworks } from '../../../mockData/artworks';
import { artists } from '../../../mockData';
import Padding from '_components/utils/Padding';
import ArtistCard from '_components/common/ArtistCard';
import Tag from '_components/common/Tag';
import ArtCard from '_components/common/ArtCard';
import CustomLink from '_components/utils/CustomLink';
import { Dialog, } from '_components/ui/dialog';
import { Button } from '_components/ui/button';
import { DialogTrigger } from '_components/ui/dialog';
import { DialogContent } from '_components/ui/dialog';
import { DialogHeader } from '_components/ui/dialog';
import { DialogTitle } from '_components/ui/dialog';
import { DialogDescription } from '_components/ui/dialog';
import { DialogFooter } from '_components/ui/dialog';

const Page = ({ params }: { params: { id: string } }) => {
    const { id } = params;

    const selectedArtwork = artworks.find((artwork) => artwork.id === Number(id));
    const artist = artists.find((artist) => artist.id === selectedArtwork?.artist);

    return (
        <PageContent>
            {
                (selectedArtwork && artist) ? (
                    <>
                        <div className='flex flex-col w-full h-80 relative md:h-[40rem] object-cover aspect-square'>
                            <CustomImage src={selectedArtwork.src ?? ""} alt='_hero' className='w-full h-full' />
                            <Dialog>
                                <DialogTrigger asChild className='absolute right-2 bottom-2'>
                                    <Button variant="outline" className='dark:bg-white dark:text-black'>View full image</Button>
                                </DialogTrigger>
                                <DialogContent className="h-[60vh] md:h-[90vh] max-w-[90vw] md:max-w-[80vw]">
                                    <div className="w-full h-full relative object-contain">
                                        <CustomImage src={selectedArtwork.src ?? ""} alt='_hero' className='w-full h-full' contain />
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>


                        <Section>
                            <Padding>
                                <div className='flex flex-col gap-7'>
                                    <div className='flex flex-col gap-3'>
                                        <h1 className='text-color font-semibold text-2xl md:text-4xl'>{selectedArtwork?.title}</h1>
                                        <span className='text-gray-500'>Created By</span>
                                        <ArtistCard name={artist.name} createdAt={artist.createdAt} details={artist.details} followers={artist.followers} hero={artist.hero} id={artist.id} monthlyUpload={artist.monthlyUpload} small />
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <span className='text-gray-500'>Description</span>
                                        <p className='text-color text-base text-left'> {selectedArtwork.description}</p>
                                    </div>

                                    <div className='flex flex-col gap-3 w-fit'>
                                        <span className='text-gray-500'>Tags</span>
                                        {
                                            selectedArtwork.tags.map((tag, index) => (
                                                <Tag text={tag} key={index} />
                                            ))
                                        }
                                    </div>
                                </div>
                            </Padding>
                        </Section>
                        <Section>
                            <Padding>
                                <div className='flex flex-col gap-7'>
                                    <div className='flex flex-col gap-6 w-full justify-between md:flex-row'>
                                        <h1 className='text-color font-semibold text-xl md:text-2xl'>More from this artist</h1>
                                        <CustomLink href={`/artist/${artist.id}`} text='Go To Artist Page' />
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 smd:grid-cols-3 md:grid-cols-4 my-10 w-full '>
                                    {artist.details.images.map((image, __) => (
                                        <ArtCard id={image.id} noDetails key={image.src} title={image.title} creator={{ img: artist.hero, name: artist.name }} img={image.src} details={{
                                            createdAt: artist.createdAt,
                                            monthlyUpload: artist.monthlyUpload,
                                        }} />
                                    ))}
                                </div>
                            </Padding>
                        </Section>
                    </>) : <></>
            }
        </PageContent >
    );
};

export default Page;