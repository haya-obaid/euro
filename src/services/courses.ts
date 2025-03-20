import { DOMAIN } from "@/constants/baseUrl";

export const getUpcommingCourses = async () => {
  try {
    const response = await fetch(`${DOMAIN}/get-upcoming-courses?lang=en`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const getCourse = async (slug: string) => {
  try {
    const response = await fetch(`${DOMAIN}/get-timings-by-course/${slug}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.timings;
  } catch (error) {
    console.error(error);
  }
};
