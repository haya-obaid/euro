import Image from "next/image";
import c1 from "../../assets/city-1.jpg";
import { CategoriesProps } from "@/types/types";
import Link from "next/link";

export const CardView = ({ items }: CategoriesProps) => {
  return (
    <div className="w-full mt-8  mx-auto md:w-[98%] flex justify-center md:justify-start flex-wrap   gap-[33px]">
      {items.map((item) => (
        <Link
          href={`/categories/${item.slug}`}
          key={item.id}
          className="w-[140px] h-[160px] md:w-[31%] md:h-[133px] relative mb-8 "
        >
          <div className="w-full h-full absolute top-0 left-0 bg-[#29335299] rounded-[13.94px]"></div>
          <Image
            src={c1}
            alt=""
            className="w-full h-full rounded-[13.94px]"
            width={264}
            height={337}
          />
          <div className="w-[100%] text-center absolute bottom-7">
            <p className="text-[23px] font-bold leading-[25px] text-[#FFFFFF] p-1">
              {item.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
