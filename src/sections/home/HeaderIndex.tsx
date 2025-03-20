"use client";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import "../../styles/headerIndex.css";
import Link from "next/link";

const DropdownButton: React.FC<{
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}> = ({ label, value, onChange, options }) => (
  <div className="w-[100%] md:w-auto">
    <select
      id={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mb-4 w-[100%] px-4 py-3  md:px-[14.5px] md:py-[10.5px] text-white rounded-[20px] bg-[#FFFFFF0A] md:bg-transparent md:w-auto md:mb-0 border border-[#FFFFFF]  cursor-pointer text-[14px] font-medium leading-5 flex items-center gap-[8px] justify-between"
    >
      <option value="" disabled>
        Select {label}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option} className="text-[#000]">
          {option}
        </option>
      ))}
    </select>
  </div>
);

export const HeaderIndex = () => {
  const [category, setCategory] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [venue, setVenue] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const categories = ["Python", "React", "JavaScript", "Data Science"];
  const dates = ["23-2-2025", "23-3-2025", "23-4-2025"];
  const venues = ["London", "New York", "Paris"];
  const durations = ["1 Week", "2 Weeks", "3 Weeks"];

  const handleSearch = () => {};

  return (
    <div className="h-auto header-home pb-4 md:pb-0 md:h-[74vh]">
      <div className="main-header  w-full">
        <Navbar />
        <div className="mt-[60px]">
          <h1 className="text-[40px] md:text-[55px] font-light leading-[57.24px] tracking-[-0.6655414700508118px] text-center text-[#ffffff]">
            Professional and Lifelong Learning
          </h1>
          <p className="text-[20px] md:text-[30px] font-normal leading-[57.24px] tracking-[-0.6655414700508118px] text-center text-[#ffffff] mt-9">
            In-House , Classroom , Online Courses
          </p>
          <div className="flex gap-5 justify-center mt-9 flex-wrap">
            <Link
              href="/categories"
              className="text-[#FFFFFF] text-[18px] leading-[57.24px] font-normal w-[287px] h-[47px] flex justify-center items-center bg-[#293352] rounded-sm"
            >
              DISCOVER ALL CATEGORIES
            </Link>
            <Link
              href="/cities"
              className="text-[#FFFFFF] text-[18px] leading-[57.24px] font-normal w-[287px] h-[47px] flex justify-center items-center bg-[#293352] rounded-sm"
            >
              DISCOVER ALL CITIES
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden hero-down absolute top-[92%] px-[44.49px] mx-auto bg-[#293352] rounded-[100px] md:flex gap-8 justify-between items-center py-[22px]">
        <button className="mb-[43px] w-[100%] px-4 py-3 md:px-[22px] md:py-[10.5px] rounded-[20px] bg-[#FFFFFF0A] md:bg-transparent md:w-auto md:mb-0 text-[#ffffff] border border-[#FFFFFF] cursor-pointer text-[14px] font-medium flex items-center justify-center">
          Enter Keyword
        </button>

        {[
          "Select Category",
          "Select Date",
          "Select Venue",
          "Select Duration",
        ].map((label, index) => (
          <DropdownButton
            key={index}
            label={label}
            value={
              label === "Select Category"
                ? category
                : label === "Select Date"
                ? date
                : label === "Select Venue"
                ? venue
                : duration
            }
            onChange={
              label === "Select Category"
                ? setCategory
                : label === "Select Date"
                ? setDate
                : label === "Select Venue"
                ? setVenue
                : setDuration
            }
            options={
              label === "Select Category"
                ? categories
                : label === "Select Date"
                ? dates
                : label === "Select Venue"
                ? venues
                : durations
            }
          />
        ))}

        <button
          onClick={handleSearch}
          className="text-[14px] font-medium leading-5 text-[#293352] bg-[#AFBFD3] rounded-[20px] border border-[#00000080] py-[10px] px-10"
        >
          Search
        </button>
      </div>

      <div className="search-results mt-10">
        {searchResults.length > 0 && (
          <div className="text-center">
            <h3 className="text-[#FFFFFF] text-[24px] font-medium">
              Search Results
            </h3>
            <ul>
              {searchResults.map((result) => (
                <li key={result.id} className="text-[#FFFFFF]">
                  {result.title} - {result.date} - {result.venue} -{" "}
                  {result.duration}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
