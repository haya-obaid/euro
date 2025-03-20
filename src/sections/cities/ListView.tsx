import { CitiesProps } from "@/types/types";
import Link from "next/link";
export const ListView = ({ items }: CitiesProps) => {
  return (
    <div className=" flex justify-center md:justify-between flex-wrap gap-16 mt-8 mb-20">
      {items?.map((item) => (
        <Link
          key={item.slug}
          href={`/cities/${item.slug}`}
          className="w-[28.2%] text-center  bg-[#293352] px-[17px] py-[18px]  text-[#FFFFFF] text-[19px] leading-[23.88px] font-normal rounded-[10px]"
          style={{
            boxShadow: " 0px 4px 4px 0px rgba(9, 11, 33, 0.02)",
          }}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};
