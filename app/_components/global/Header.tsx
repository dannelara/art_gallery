"use client"
import DropDownIcon from '_assets/icons/global/DropDownIcon';
import StoreIcon from '_assets/icons/global/StoreIcon';
import { useGlobalState } from '_global/GlobalState';
import Link from 'next/link';
import React from 'react';
import Button from '../common/Button';
import UserIcon from '_assets/icons/global/UserIcon';
import LightMode from '_assets/icons/global/LightMode';
import DarkMode from '_assets/icons/global/DarkMode';

const Header = () => {
    const { theme, toggleTheme } = useGlobalState()

    return (
        <div className='bg-white dark:bg-gray-600  px-6 py-[.95rem] md:px-12 md:py-5 flex justify-between items-center'>
            <div className='flex gap-3 items-center'>
                <h1 className='text-base md:text-xl text-black dark:text-white font-semibold'>TriVisionArt</h1>
            </div>


            <div className='flex items-center gap-3'>
                <div className='cursor-pointer' onClick={() => toggleTheme()}>
                    {
                        theme === "dark" ? <LightMode /> : <DarkMode />
                    }
                </div>
                <ul className='hidden md:flex items-center'>
                    <li>
                        <Link href={"#"} className='link'>Artists</Link>
                    </li>
                    <li>
                        <Link href={"#"} className='link'>Rankings</Link>

                    </li>
                    <li>
                        <Link href={"#"} className='link'>Explore</Link>
                    </li>
                </ul>
                <div className='hidden md:block'>
                    <Button icon={<UserIcon />} text='Sign Up' type='PRIMARY' variant='FILLED' />
                </div>
                <div className='block cursor-pointer md:hidden'>
                    <DropDownIcon color={theme === "dark" ? "white" : "black"} />
                </div>
            </div>


        </div>
    );
};

export default Header;