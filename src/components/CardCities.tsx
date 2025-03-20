import Image from "next/image";
import city from "../assets/card-city.jpg";
import { City } from "@/types/types";
interface CitiesCardProps {
  data: City;
}
export const CardCities = ({ data }: CitiesCardProps) => {
  return (
    <div className="w-[43.75%] h-[338px] mb-2 md:w-[17%] md:mb-0 relative">
      <Image
        src={city}
        alt={""}
        title=""
        className="rounded-3xl w-full h-full"
        width={224}
        height={338}
      />
      <div
        className="absolute bottom-10 left-4
"
      >
        <h4 className="text-[32px] font-bold text-white">{data.title}</h4>
        <p className="text-[14px] font-light text-white">{data.description}</p>
      </div>
    </div>
  );
};
