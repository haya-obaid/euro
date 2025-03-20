"use client";
import { useEffect, useState } from "react";
import { CardView } from "@/sections/courses/CardView";
import { ListView } from "@/sections/courses/ListView";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineGridView } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { use } from "react";
import { getCategoryDetails } from "@/services/categories";
import { Course } from "@/types/types";
import { useRouter } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function Page({ params }: PageProps) {
  const router = useRouter();
  const { slug } = use(params);
  const [view, setView] = useState<"card" | "list">("card");
  const [categoryCourses, setcategoryCourses] = useState<Course[]>([]);
  useEffect(() => {
    const fetchCourses = async () => {
      const data = (await getCategoryDetails(slug)) as Course[];
      setcategoryCourses(data);
    };
    if (slug) fetchCourses();
  }, [slug]);

  return (
    <div>
      <div className=" w-[89%] mx-auto  mt-8">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => router.back()}
            className="flex gap-2 items-center text-4xl font-black leading-[57.24px] text-[#293352]"
          >
            <FaArrowLeft /> DISCOVER CATEGORIES
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

      <div className="w-[88.75%] mx-auto">
        {view === "card" && <CardView items={categoryCourses} />}

        {view === "list" && <ListView items={categoryCourses} />}
      </div>

      {/* <SecCards title='Upcoming Courses' /> */}
    </div>
  );
}
