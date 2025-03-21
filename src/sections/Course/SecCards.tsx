import Image from "next/image";
import c1 from "../../assets/card-course-1.jpg";
import c2 from "../../assets/card-course-2.jpg";
import c3 from "../../assets/card-course-3.jpg";
import c4 from "../../assets/card-course-4.jpg";
import c5 from "../../assets/card-course-5.jpg";
import { MdOutlineDateRange } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { WiTime3 } from "react-icons/wi";
import Link from "next/link";
import { Course } from "@/types/types";

interface SecCardsProps {
  title: string;
}

export const SecCards: React.FC<SecCardsProps> = ({ title }) => {
  const courses = [
    {
      image: c1,
      title: "Python for Beginners - Learn Programming from Scratch",
      startDate: "23-02-2025",
      endDate: "23-02-2025",
      location: "LONDON",
      duration: "11 Weeks",
    },
    {
      image: c2,
      title: "Advanced JavaScript & React Masterclass",
      startDate: "15-03-2025",
      endDate: "30-03-2025",
      location: "NEW YORK",
      duration: "2 Weeks",
    },
    {
      image: c3,
      title: "Full-Stack Web Development Bootcamp",
      startDate: "01-04-2025",
      endDate: "01-07-2025",
      location: "SAN FRANCISCO",
      duration: "3 Months",
    },
    {
      image: c4,
      title: "UI/UX Design Essentials - From Zero to Hero",
      startDate: "10-05-2025",
      endDate: "30-06-2025",
      location: "BERLIN",
      duration: "7 Weeks",
    },
    {
      image: c5,
      title: "Data Science & Machine Learning with Python",
      startDate: "05-06-2025",
      endDate: "05-09-2025",
      location: "DUBAI",
      duration: "3 Months",
    },
  ];

  return (
    <div className="w-[91%] mx-auto mt-10 mb-16">
      <h3 className="text-[36px] font-black leading-[68px] text-[#080808]">
        {title}
      </h3>
      <div className="flex gap-4 flex-wrap md:flex-nowrap justify-center">
        {courses?.map((course , i) => (
          <CourseCard key={i} {...course} />
        ))}
      </div>
    </div>
  );
};

export const CourseCard: React.FC<Course> = ({
  course,
  date_from,
  date_to,
  location,
  duration,
}) => (
  <Link
    href="/courses/1"
    className="w-[140px] h-[139px] md:w-[251px] md:h-[320px] relative"
  >
    <Image
      src={c1}
      alt={""}
      className="rounded-3xl w-full h-full object-cover"
      width={250}
      height={319}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,32,40,0.59)] to-[rgba(255,255,255,0.236)] rounded-3xl"></div>

    <div className="text-center absolute bottom-3 md:bottom-10 z-10">
      <div className="w-[90%] mx-auto pb-4 border-b border-dashed border-[#FFFFFF]">
        <p className="text-[11.24px] font-bold text-[#FEFEFE] leading-[14.13px]">
          {course.title}
        </p>
      </div>

      <div className="w-[90%] mx-auto flex justify-between items-center mt-2">
        {date_from && date_to && (
          <div className="flex flex-col gap-1">
            <div className="flex items-center text-[#FFFFFF] text-[8px] font-normal leading-[10.06px] gap-1">
              <MdOutlineDateRange />
              <p>START: {date_from}</p>
            </div>
            <div className="hidden md:flex items-center text-[#FFFFFF] text-[8px] font-normal leading-[10.06px] gap-1">
              <MdOutlineDateRange />
              <p>END: {date_to}</p>
            </div>
          </div>
        )}
        {location && (
          <div className="flex items-center text-[#FFFFFF] text-[8px] font-normal leading-[10.06px] gap-1">
            <HiOutlineLocationMarker />
            <p>{location}</p>
          </div>
        )}
        {duration && (
          <div className="hidden md:flex items-center text-[#FFFFFF] text-[8px] font-normal leading-[10.06px] gap-1">
            <WiTime3 />
            <p>{duration}</p>
          </div>
        )}
      </div>
    </div>
  </Link>
);
