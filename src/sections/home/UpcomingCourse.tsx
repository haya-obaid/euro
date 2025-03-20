"use client";
import { useEffect, useState } from "react";
import { TitleSection } from "@/components/TitleSection";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { CourseCard } from "../Course/SecCards";
import { getUpcommingCourses } from "@/services/courses";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "@/styles/UpcomingCourse.css";
import { Course } from "@/types/types";

export const UpcomingCourse = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchUpcomming = async () => {
      try {
        const data = await getUpcommingCourses();
        setCourses(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUpcomming();
  }, []);

  return (
    <div className="w-full">
      <TitleSection
        title="UPCOMING COURSES"
        desc="Innovativeness within the framework of leading strategically as well as managing changes."
        color="#000000"
      />

      <div className="course-container w-full">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={2}
          spaceBetween={50}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1.2, spaceBetween: 5 },
            640: { slidesPerView: 2, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 15 },
            1280: { slidesPerView: 4, spaceBetween: 20 },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 0.6,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper-courses"
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id} className="swiper-slide-custom" >
              <CourseCard {...course} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mobile-course-view block md:hidden">
          {courses.map((course) => (
            <div key={course.id} className="course-card-mobile">
              <CourseCard {...course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
