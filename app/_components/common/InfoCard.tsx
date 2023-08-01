import React from 'react';

const InfoCard = ({ logo, link, title, desc }: { logo: React.ReactNode, link: string, title: string, desc: string }) => {
    return (
        <div className='bg-gray-500 p-5 gap-5 rounded-xl flex md:flex-col md:scale'>
            <div className='h-24 aspect-square bg-purple rounded-xl md:h-60'>
                {/* {logo} */}
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-white text-base font-semibold'>{title}</h1>
                <span className='text-white text-xs font-normal'>{desc}</span>
            </div>
        </div>
    );
};

export default InfoCard;