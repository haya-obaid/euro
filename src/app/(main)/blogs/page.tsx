"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import c1 from "../../../assets/image-blogs.jpg";
import { Blog } from "@/types/types";
import { getBlogs } from "@/services/blogs";

const Card: React.FC<Blog> = ({ image, title, description, slug }) => (
  <div className="w-[100%] md:w-[32%] mt-8 mb-16 flex flex-col gap-2 p-4 rounded-lg border border-[#D9D9D9]">
    <Image src={c1} width={377} height={100} alt={title} className="w-[100%]" />
    <h5 className="text-[20px] leading-7 font-bold text-[#1E1E1E] mt-2">
      {title}
    </h5>
    <p className="text-xs leading-[19.6px] text-[#757575]">{description}</p>
    <div className="flex justify-end">
      <Link
        href={`/blogs/${slug}`}
        className="flex py-[2px] px-[40px] rounded-lg items-center gap-[6.5px] bg-[#293352] text-[#FFFFFF] text-[14px] font-bold leading-[28.6px] transition-transform duration-300 hover:scale-105"
      >
        Read more <FaArrowRight />
      </Link>
    </div>
  </div>
);

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getBlogs();
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="w-[89%] mx-auto mt-8">
      <Link
        href=""
        className="flex gap-2 items-center text-4xl font-black leading-[57.24px] text-[#293352]"
      >
        <FaArrowLeft /> Discover Blogs
      </Link>
      <p className="text-[20px] font-normal leading-[25.14px] text-[#000000] mt-8">
        Browse our collection of career-enhancing articles designed to keep you
        informed and updated on the latest trends.
      </p>

      <div className="flex flex-wrap justify-between">
        {blogs?.map((blog) => (
          <Card
            key={blog.slug}
            image={blog.image}
            title={blog.title}
            description={blog.description}
            slug={blog.slug}
            image_alt={""}
            id={0}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
