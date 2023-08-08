import React from 'react';
import Image from 'next/image';

const CustomImage = ({ src, alt, className, contain }: { src: string, alt: string, className: string, contain?: boolean }) => {
    return (
        <Image className={className} src={src} alt={alt} fill loading='lazy' placeholder='empty' style={{
            objectFit: contain ? "contain" : "cover",
        }}
        // quality={10}
        />
    );
};

export default CustomImage;