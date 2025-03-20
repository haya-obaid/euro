"use client";
import { use, useEffect, useState } from "react";
import Image from "next/image";
import c1 from "../../../../assets/image-blogs.jpg";
import { Blog } from "@/types/types";
import { getSingleBlog } from "@/services/blogs";
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function Page({ params }: PageProps) {
  const { slug } = use(params);
  const [blog, setBlog] = useState<Blog | null>(null);
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await getSingleBlog(slug);
        setBlog(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBlog();
  }, [slug]);

  return (
    <div className="w-[88%] mx-auto mt-8">
      <div className="w-[100%] h-[396px] relative">
        <Image
          src={c1}
          width={1262}
          height={396}
          alt={blog?.image_alt || "Blog image"}
          className="w-full h-full rounded-3xl object-cover"
        />
        <div className="absolute w-full h-full bg-[#C8CAD0] top-0 opacity-50 rounded-3xl"></div>
        <div className="absolute w-full h-full flex justify-center items-center mx-auto top-0 z-10 ">
          <p className="w-[82%] text-[36px] leading-[50.4px] font-bold text-[#293352]">
            {blog?.title}
          </p>
        </div>
      </div>

      <div className="mt-[51px] mb-10">
        <p className="text-[20px] font-normal leading-7 text-[#000000]">
          {blog?.description}
        </p>
      </div>
    </div>
  );
}
