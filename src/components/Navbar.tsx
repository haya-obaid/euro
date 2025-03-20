"use client";
import { useState } from 'react'
import logo from '@/assets/logo.svg'
import menu from '@/assets/icons/Menu.svg'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import close from '@/assets/icons/close_ring.png'
import '@/styles/headerIndex.css'


export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar w-full">
      <div className='flex justify-between w-[94%] mx-auto items-center p-1'>
        <button className='cursor-pointer w-[50px]' onClick={toggleMenu}>
          <Image src={menu} width={45} height={45} alt="" className='w-[50px]' />
        </button>


        <Image src={logo} width={367} height={84} alt="logo" className='w-[131px] md:w-[28%]' />

        <button className='hidden md:block text-[#F1F1F1] border-2 py-[10px] px-[24px] rounded-[10px] cursor-pointer text-[20px] font-normal leading-5'>الدورات التدريبية</button>

        <button className='block md:hidden text-[#F1F1F1] border-2 py-[4px] px-[8px] rounded-[10px] cursor-pointer'>الدورات التدريبية</button>

        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full bg-[#293352] p-4 rounded-[10px] pb-[149px] z-30" >
            <div className='flex justify-between w-[94%] mx-auto items-center'>
              <div className="flex gap-16 items-center">
                <button className='cursor-pointer w-11' onClick={toggleMenu}>
                  <Image src={close} width={45} height={45} alt="" />
                </button>

              </div>

              <Image src={logo} width={367} height={84} alt="logo" className='w-[131px] md:w-[28%]' />

              <button className='hidden md:block text-[#F1F1F1] border-2 py-[10px] px-[24px] rounded-[10px] cursor-pointer text-[20px] font-normal leading-5'>الدورات التدريبية</button>

              <button className='block md:hidden text-[#F1F1F1] border-2 py-[4px] px-[8px] rounded-[10px] cursor-pointer'>الدورات التدريبية</button>
            </div>
            <div className="w-[88.7%] mx-auto mt-10">
              <p className='text-[24px] md:text-[45px] leading-[57.24px] font-light text-[#FFFFFF]'>Browse by Subject Area</p>
              <div className="flex-col md:flex-row flex gap-0 md:gap-10 border-t border-[#FFFFFF] pt-[50px] mt-4">
                <ul className='flex flex-col gap-4 mb-4 md:mb-0'>
                  <li className='flex items-center gap-[13px] text-[20px] leading-[57.24px] font-light text-[#FFFFFF]'><IoIosArrowForward /> <Link href='/'>Home Page</Link></li>
                  <li className='flex items-center gap-[13px] text-[20px] leading-[57.24px] font-light text-[#FFFFFF]'><IoIosArrowForward /> <Link href='/categories'>CATEGORIES</Link></li>
                  <li className='flex items-center gap-[13px] text-[20px] leading-[57.24px] font-light text-[#FFFFFF]'><IoIosArrowForward /> <Link href='/contact'>CONTACT US</Link></li>
                </ul>
                <ul className='flex flex-col gap-4 mb-4 md:mb-0'>
                  <li className='flex items-center gap-[13px] text-[20px] leading-[57.24px] font-light text-[#FFFFFF]'><IoIosArrowForward /> <Link href='/about'>ABOUT</Link></li>
                  <li className='flex items-center gap-[13px] text-[20px] leading-[57.24px] font-light text-[#FFFFFF]'><IoIosArrowForward /> <Link href='/cities'>CITIES</Link></li>
                  <li className='flex items-center gap-[13px] text-[20px] leading-[57.24px] font-light text-[#FFFFFF]'><IoIosArrowForward /> <Link href='/blogs'>BLOGS</Link></li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
