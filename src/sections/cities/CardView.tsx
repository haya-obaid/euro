import Image from "next/image";
import c1 from "../../assets/city-1.jpg";
import "../../styles/CardCities.css";
import { CitiesProps } from "@/types/types";
import Link from "next/link";

export const CardView = ({ items }: CitiesProps) => {
  return (
    <div className="w-[96%] mx-auto flex justify-between flex-wrap  mt-8 mb-20">
      {items?.map((item) => (
        <Link
          href={`/cities/${item.slug}`}
          key={item.id}
          className="card-city w-[44%] h-[133px] md:w-[30.3%] md:h-[133px] relative mb-10"
        >
          <Image
            src={c1}
            alt=""
            className="w-full h-full rounded-2xl"
            width={400}
            height={200}
          />
          <div className="main-card-city absolute bottom-0 w-full h-full  rounded-3xl">
            <div className="w-[100%] text-center flex flex-col items-center justify-center h-full">
              <h4 className="text-[30px] font-bold leading-[37.71px] text-[#FFFFFF]">
                {item.title}
              </h4>
              <p className="text-[15px] font-normal leading-[18.86px] text-[#FFFFFF] p-[4px] border-t border-dashed border-[#FFFFFF] mt-6">
                {item.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
