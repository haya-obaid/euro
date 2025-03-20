import type { Category } from "@/types/types";
import "../styles/CategoriesCard.css";

interface CategoriesCardProps {
  data: Category;
}

export const CategoriesCard = ({ data }: CategoriesCardProps) => {
  return (
    <div className="cat-card cursor-pointer w-[47%] relative md:w-[12.18%] h-[80px] flex items-center justify-center rounded-2xl shadow-[0px_6px_10px_4px_rgba(0,0,0,0.15)] text-center p-2.5 text-[14px] font-bold leading-[20px] text-[#293352] mb-6">
      <p className="text-[14px] font-bold leading-[20px] text-center">
        {data.title}
      </p>
    </div>
  );
};
