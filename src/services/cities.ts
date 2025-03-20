import { DOMAIN } from "@/constants/baseUrl";
import type { City } from "@/types/types";

export const getHomeCities = async () => {
  try {
    const response = await fetch(`${DOMAIN}/get-home-cities?lang=en`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: City[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching:", error);
  }
};

export const getAllCities = async () => {
  try {
    const response = await fetch(`${DOMAIN}/get-all-cities?lang=en`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: City[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching:", error);
  }
};
export const getCityDetails = async (slug: string) => {
  try {
    const response = await fetch(
      `${DOMAIN}/get-city-courses-and-categories/${slug}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching:", error);
  }
};
