import React from 'react';
import Image from 'next/image';

const CustomImage = ({ src, alt, className }: { src: string, alt: string, className: string }) => {
    return (
        <Image className={className} src={src} alt={alt} loading='lazy' layout='fill'
            objectFit='cover' />
    );
};

export default CustomImage;