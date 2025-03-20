import { DOMAIN } from "@/constants/baseUrl";
import type { Category } from "@/types/types";

export const getCategories = async () => {
  try {
    const response = await fetch(`${DOMAIN}/get-all-categories?lang=en`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: Category[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};
export const getCategoryDetails = async (slug: string) => {
  try {
    const response = await fetch(`${DOMAIN}/get-category-courses/${slug}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.courses;
  } catch (error) {
    console.error("Error fetching:", error);
  }
};
