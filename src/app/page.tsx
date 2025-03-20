// src/app/page.tsx
import { Footer } from "@/components/Footer";
import { About } from "@/sections/home/About";
import { Categories } from "@/sections/home/Categories";
import { Cities } from "@/sections/home/Cities";
import { HeaderIndex } from "@/sections/home/HeaderIndex";

import { UpcomingCourse } from "@/sections/home/UpcomingCourse";

export default function Home() {
  return (
    <>
      <HeaderIndex />
      <UpcomingCourse />
      <About />
      <Cities />
      <Categories />
      <Footer />
    </>
  );
}
