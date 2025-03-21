import { DOMAIN } from "@/constants/baseUrl";
export async function getBlogs() {
  try {
    const response = await fetch(`${DOMAIN}/get-blogs`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
export async function getSingleBlog(slug: string) {
  try {
    const response = await fetch(`${DOMAIN}/blogs/get-blog/${slug}`);
    if (!response.ok) throw new Error("Failed to fetch blog");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
