"use client";
import { use, useEffect, useState } from "react";
import { CardView } from "@/sections/courses/CardView";
import { ListView } from "@/sections/courses/ListView";
import { MdOutlineGridView } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { getCityDetails } from "@/services/cities";
import { Category, Course } from "@/types/types";
import { useRouter } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}
export default function Page({ params }: PageProps) {
  const router = useRouter();
  const { slug } = use(params);
  const [view, setView] = useState<"card" | "list">("card");
  // const [cityCategories, setCityCategories] = useState([]);
  const [cityCourses, setCityCourses] = useState<Course[]>([]);
  // console.log(cityCourses);
  useEffect(() => {
    const fetchCity = async () => {
      try {
        const data = await getCityDetails(slug);
        // setCityCategories(data?.categories);
        setCityCourses(data?.courses ?? []);
      } catch (error) {
        console.log(error);
      }
    };

    if (slug) fetchCity();
  }, [slug]);
  return (
    <div>
      <div className=" w-[89%] mx-auto  mt-8">
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
          Embark on a comprehensive and enriching learning journey with our
          diverse array of training course categories.
        </p>
      </div>
      <div className="w-[88%] mx-auto">
        {view === "card" && <CardView items={cityCourses} />}

        {view === "list" && <ListView items={cityCourses} />}
      </div>
    </div>
  );
}
