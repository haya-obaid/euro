"use client";
import { useEffect, useState } from "react";
import { CardView } from "@/sections/cities/CardView";
import { ListView } from "@/sections/cities/ListView";
import { MdOutlineGridView } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { getAllCities } from "@/services/cities";
import { City } from "@/types/types";
import { useRouter } from "next/navigation";
function Page() {
  const router = useRouter();
  const [view, setView] = useState<"card" | "list">("card");
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCities = async () => {
      try {
        setLoading(true);
        const citiesData = (await getAllCities()) as City[];
        setCities(citiesData);
      } finally {
        setLoading(false);
      }
    };
    fetchCities();
  }, []);

  return (
    <div className="relative">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-60 z-50">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-[#293352] rounded-full animate-spin"></div>
        </div>
      )}
      <div className="w-[89%] mx-auto mt-8">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => router.back()}
            className="flex gap-2 items-center text-4xl font-black leading-[57.24px] text-[#293352]"
          >
            <FaArrowLeft /> DISCOVER CITIES
          </button>
          <div className="flex">
            <button
              onClick={() => setView("card")}
              className={`px-4 py-[15px] flex gap-1 items-center text-center ${
                view === "card"
                  ? "bg-[#AFBFD3] border border-[#EBEEF2] text-white"
                  : "bg-white border border-[#EBEEF2] text-[#293352]"
              } rounded-l-lg`}
            >
              <MdOutlineGridView />
              <span className="hidden md:block">Show Cards View</span>
            </button>
            <button
              onClick={() => setView("list")}
              className={`px-4 py-[15px] flex gap-1 items-center text-center ${
                view === "list"
                  ? "bg-[#AFBFD3] border border-[#EBEEF2] text-white"
                  : "bg-white border border-[#EBEEF2] text-[#293352]"
              } rounded-r-lg`}
            >
              <IoIosMenu />
              <span className="hidden md:block">Show List View</span>
            </button>
          </div>
        </div>

        <p className="text-[20px] font-normal leading-[25.14px] text-[#000000]">
          Discover the vibrant cities where we offer our top-tier training
          courses, meticulously designed to meet the evolving demands of the
          modern workforce.
        </p>
      </div>

      <div className="w-[88%] mx-auto">
        {view === "card" && <CardView items={cities} />}
        {view === "list" && <ListView items={cities} />}
      </div>
    </div>
  );
}

export default Page;
