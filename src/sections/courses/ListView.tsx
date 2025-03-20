import { CategoriesProps } from "@/types/types";
import Link from "next/link";

export const ListView = ({ items }: CategoriesProps) => {
  return (
    <div className="flex flex-col gap-4 my-8">
      {items.map((item) => (
        <Link href={`/courses/${item.slug}`} key={item.id}>
          <div
            className={`w-[90%] flex md:w-[100%] justify-between items-center py-6 px-4 rounded-2xl bg-[#293352] text-[#FFFFFF]`}
          >
            <p className="text-[12px]  md:text-[16px] font-normal leading-[20.11px]">
              {item.title}
            </p>
            {/* <LucideChevronRight size={14} /> */}
          </div>
        </Link>
      ))}
    </div>
  );
};
