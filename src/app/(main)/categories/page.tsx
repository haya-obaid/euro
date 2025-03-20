"use client";
import { useEffect, useState } from "react";
import { CardView } from "@/sections/categories/CardView";
import { ListView } from "@/sections/categories/ListView";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineGridView } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { getCategories } from "@/services/categories";
import { Category } from "@/types/types";
import { useRouter } from "next/navigation";
function Page() {
  const router = useRouter();
  const [view, setView] = useState<"card" | "list">("card");
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const categoriesData = (await getCategories()) as Category[];
        setCategories(Array.isArray(categoriesData) ? categoriesData : []);
      } catch (error) {
        console.error("Failed to fetch categories", error);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);
  return (
    <div className="relative">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-60 z-50">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-[#293352] rounded-full animate-spin"></div>
        </div>
      )}
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
        {view === "card" && <CardView items={categories} />}

        {view === "list" && <ListView items={categories} />}
      </div>

      {/* <SecCards title='Upcoming Courses' /> */}
    </div>
  );
}

export default Page;
