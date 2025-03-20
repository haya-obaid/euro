"use client";
import '../styles/infoCourse.css';
import { IoIosArrowDown } from 'react-icons/io';

const DropdownButton: React.FC<{ label: string; }> = ({ label }) => (
  <button
    className="mb-4 w-[100%] px-4 py-3  md:px-[14.5px] md:py-[10.5px] rounded-[20px] bg-[#FFFFFF0A] md:bg-transparent md:w-auto md:mb-0  text-[#ffffff] border border-[#FFFFFF]  cursor-pointer text-[14px] font-medium leading-5 flex items-center gap-[8px] justify-between"
  >
    {label}
    <IoIosArrowDown />
  </button>
);


export const DropdownHeader = () => {
  return (
    <div className="flex-col md:flex-row flex justify-between w-[78%] gap-8 mx-auto">
      <button className='mb-[43px] w-[100%] px-4 py-3 md:px-[22px] md:py-[10.5px] rounded-[20px] bg-[#FFFFFF0A] md:bg-transparent md:w-auto md:mb-0  text-[#ffffff] border border-[#FFFFFF]  cursor-pointer text-[14px] font-medium flex items-center '>Enter Keyword</button>
      {["Select Category", "Select Date", 'Select Venue', 'Select Duration'].map((label, index) => (
        <DropdownButton key={index} label={label} />
      ))}
      <button className='text-[14px] font-medium leading-5 text-[#293352] bg-[#AFBFD3] rounded-[20px] border border-[#00000080] py-[10px] px-10'>Search</button>

    </div>
  );
};
