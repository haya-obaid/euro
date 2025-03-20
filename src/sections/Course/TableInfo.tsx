import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import city from "../../assets/icons/city.svg";
import calendar from "../../assets/icons/calendar.svg";
import register from "../../assets/icons/register.svg";
import help from "../../assets/icons/help.svg";
import download from "../../assets/icons/download.svg";
import register_light from "../../assets/icons/register-light.svg";
import { Timing } from "@/types/types";

interface TableHeaderProps {
  title: string;
  icon: StaticImageData;
}

interface TableRowProps {
  city_title: string;
  date_from: string;
  date_to: string;
  price: string;
}
interface TableInfoProps {
  courseTimings: Timing[]; // Use the Timing type here
}

const TableHeader: React.FC<TableHeaderProps> = ({ icon, title }) => (
  <th className="py-2 flex items-center md:text-[12px] text-[8px] font-normal leading-6 text-[#313131]">
    <Image
      src={icon}
      alt=""
      width={20}
      height={20}
      className="hidden md:block"
    />
    {title}
  </th>
);

const TableRow: React.FC<TableRowProps> = ({
  city_title,
  date_from,
  date_to,
  price,
}) => (
  <tr
    className="bg-white px-3 md:py-2 md:pl-12 md:pr-7  flex justify-between items-center border-b border-gray-200 mb-2 rounded-lg"
    style={{ boxShadow: "0px 2px 3px 0px rgba(0, 0, 0, 0.3)" }}
  >
    <td className=" text-[6px] leading-[7.54px]  md:text-[14px] font-normal md:leading-7 text-[#313131] text-center">
      {city_title}
    </td>
    <td className="text-[6px] leading-[7.54px]  md:text-[14px] font-normal md:leading-7 text-[#313131] text-center">
      {date_from}
    </td>
    <td className="text-[6px] leading-[7.54px]  md:text-[14px] font-normal md:leading-7 text-[#313131] text-center">
      {date_to}
    </td>
    <td className="text-[6px] leading-[7.54px]  md:text-[14px] font-normal md:leading-7 text-[#313131] text-center">
      {price}
    </td>
    <td className="text-center">
      <Link
        href="/register"
        className="px-[2px] py-1 md:px-2 text-center rounded-lg bg-[#293352] text-[#FFFFFF] text-[10px] md:text-[14px] font-bold  leading-[12.57px] md:leading-[28.6px] flex items-center gap-[3.5px]"
      >
        <Image
          src={register_light}
          alt=""
          width={22}
          height={22}
          className="w-[16px] h-[16px] hidden md:block"
        />
        Register
      </Link>
    </td>
    <td className="text-center">
      <Link
        href="/enquire"
        className="border border-[#293352] px-[2px] py-1 md:px-2 text-[#293352] rounded-lg text-[10px] md:text-[14px] font-bold  leading-[12.57px] md:leading-[28.6px] flex items-center gap-[3.5px]"
      >
        <Image
          src={help}
          alt=""
          width={24}
          height={24}
          className="w-[16px] h-[16px] hidden md:block"
        />
        Inquire
      </Link>
    </td>
    <td className="text-center">
      <Link
        href=""
        className="text-[10px] md:text-[14px] font-normal leading-[12.57px] md:leading-[24.52px] text-[#313131] px-[2px] py-1 md:px-2 flex items-center gap-[3.5px]"
      >
        <Image
          src={download}
          alt=""
          width={22}
          height={22}
          className="w-[16px] h-[16px] hidden md:block"
        />
        Download/Print
      </Link>
    </td>
  </tr>
);

export const TableInfo: React.FC<TableInfoProps> = ({ courseTimings }) => {
  return (
    <div className="w-[87%] relative" style={{ zIndex: "2" }}>
      <table className="w-full mb-4 ">
        <thead>
          <tr
            className="bg-white px-3 md:py-2 md:pl-12 md:pr-7 flex justify-between items-center border-b border-gray-200 mb-2 rounded-lg "
            style={{
              boxShadow: "0px 0px 4px 0px rgba(117, 74, 201, 0.25)",
            }}
          >
            {[
              { icon: city, title: "City" },
              { icon: calendar, title: "Start Date" },
              { icon: calendar, title: "End Date" },
              { icon: calendar, title: "Price" },
              { icon: register, title: "Register" },
              { icon: help, title: "Inquire" },
              { icon: download, title: "Download/Print" },
            ].map(({ icon, title }, index) => (
              <TableHeader key={index} icon={icon} title={title} />
            ))}
          </tr>
        </thead>
        <tbody>
          {courseTimings?.map((item) => (
            <TableRow key={item.id} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
