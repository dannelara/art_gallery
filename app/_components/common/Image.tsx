import React from 'react';
import Image from 'next/image';

const CustomImage = ({ src, alt, className }: { src: string, alt: string, className: string }) => {
    return (
        <Image className={className} src={src} alt={alt} fill loading='lazy' placeholder='empty' style={{
            objectFit: 'cover',
        }}
        />
    );
};

export default CustomImage;