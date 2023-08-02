import Link from 'next/link';
import React from 'react';

const CustomLink = ({ text, href }: { text: string, href: string }) => {
    return (
        <Link href={href} className='flex px-[1.88rem]  text-base items-center font-semibold rounded-xl  gap-3 h-16 cursor-pointer justify-center border-2 border-blue-600 dark:text-white'>
            {text}
        </Link>
    );
};

export default CustomLink;