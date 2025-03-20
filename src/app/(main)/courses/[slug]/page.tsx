"use client";
import Image from "next/image";
import check from "../../../../assets/icons/Check_ring.svg";
import Link from "next/link";
import "@/styles/coursePage.css";
import { TableInfo } from "@/sections/Course/TableInfo";
import { CourseModules } from "@/sections/Course/CourseModules";
import { IoCloseOutline } from "react-icons/io5";
import { use, useEffect, useState } from "react";
import { Timing } from "@/types/types";
import { getCourse } from "@/services/courses";

interface PageProps {
  params: Promise<{ slug: string }>;
}

interface BtnDateProps {
  title: string;
}

export default function Page({ params }: PageProps) {
  const { slug } = use(params);
  const [courseTimings, setCourseTimings] = useState<Timing[] | []>([]);
  useEffect(() => {
    const fetchCourse = async () => {
      const data = await getCourse(slug);
      setCourseTimings(data);
    };
    if (slug) {
      fetchCourse();
    }
  }, [slug]);
  return (
    <div>
      <div className="relative">
        <div className="container-table py-[54px] flex flex-col items-center justify-center border-b-[1.5px] border-[#293352] pb-4 bg-slate-400">
          <div
            className="w-[87%] bg-white px-3 md:py-[14px] md:pl-8 md:pr-7 flex gap-5 items-center border-b border-gray-200 mb-[19px] rounded-lg relative"
            style={{
              boxShadow: "0px 0px 4px 0px rgba(117, 74, 201, 0.25)",
              zIndex: "2",
            }}
          >
            <button className="w-auto md:w-[94px] py-[2px] flex justify-center items-center md:text-[14px] text-[8px] font-bold leading-[28.6px] text-white bg-[#293352] border border-[#293352] rounded-lg">
              All Dates
            </button>
            {[
              { title: "Januray" },
              { title: "March" },
              { title: "April" },
              { title: "March" },
              { title: "April" },
            ].map(({ title }, index) => (
              <BtnDate key={index} title={title} />
            ))}{" "}
          </div>
          <TableInfo courseTimings={courseTimings} />
        </div>
      </div>
      <div className="w-[97%] md:w-[88%] mx-auto mt-10">
        <div className="hidden md:flex border border-[#F3F2F8] rounded-xl  py-[14px] justify-between mb-4 px-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 bg-[#FCF4E9] rounded-xl flex justify-center items-center">
              <Image src={check} alt="" width={24} height={24} />
            </span>

            <div className="">
              <p className="text-[14.5px] font-normal leading-5 text-[#1A1A25]">
                You Can Request This Course IN House Or Online Easly
              </p>
              <p className="text-[13px] font-normal leading-[18.2px] text-[#808192]">
                Just Click at button and fill shorted form , and congrats you
                are request at support team.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <Link
              href=""
              className="text-[14px] font-bold leading-[19.6px] text-center text-[#293352]  py-[10px] px-6 border rounded-[10px] border-[#293352]"
            >
              Request In House
            </Link>

            <Link
              href=""
              className="text-[14px] font-bold leading-[19.6px] text-center text-[#FFFFFF]  py-[10px] px-6  rounded-[10px] bg-[#293352]"
            >
              Request Online
            </Link>
            <IoCloseOutline size={32} className="text-[#1A1A25]" />
          </div>
        </div>

        <div className=" mt-4 mb-20">
          <p className="text-[16px] font-normal ">
            Administration and Secretaries - Management & Leadership
          </p>
          <h1 className="text-[40px] font-normal mt-4 ">
            Effective Office Management
          </h1>
          <p className=" text-[16px] font-normal leading-[20.11px] capitalize">
            Effective office management plays a crucial role in enhancing
            organizational efficiency and productivity. It encompasses planning,
            organizing, and coordinating various administrative activities to
            ensure a smooth workflow and a positive work environment. This
            course aims to equip participants with essential knowledge and
            skills for managing offices effectively, ultimately leading to
            improved team performance and communication.
          </p>
        </div>
        <div className="w-[92%] ml-3 md:w-full md:ml-0">
          <CourseModules />
        </div>
      </div>

      {/* <SecCards title='More Courses' /> */}
    </div>
  );
}

const BtnDate: React.FC<BtnDateProps> = ({ title }) => (
  <button className="w-auto md:w-[87px] py-[2px] flex justify-center items-center md:text-[14px] text-[8px] font-bold leading-[28.6px] text-[#293352] border border-[#293352] rounded-lg">
    {title}
  </button>
);
