import { CategoriesCard } from "@/components/CategoriesCard";
import { TitleSection } from "@/components/TitleSection";
import { getCategories } from "@/services/categories";

export async function Categories() {
  const categories = await getCategories();

  return (
    <div>
      <TitleSection
        title="Discover Categories"
        desc="Innovativeness within the framework of leading strategically as well as managing changes."
        color="#293352"
      />
      <div className="hidden w-[89%] mb-16 mx-auto md:flex flex-wrap justify-center gap-6">
        {categories?.map((category) => (
          <CategoriesCard key={category.id} data={category} />
        ))}
      </div>

      <div className="md:hidden w-[92.5%] my-[80px] mx-auto flex flex-wrap justify-between">
        {categories?.map((category) => (
          <CategoriesCard key={category.id} data={category} />
        ))}
      </div>
    </div>
  );
}
