import { StaticImageData } from "next/image";

export interface Category {
  id: string;
  slug: string;
  title: string;
  description: string;
}
export interface CategoriesProps {
  items: Category[];
}
export interface City {
  id: string;
  slug: string;
  title: string;
  description: string;
}
export interface CitiesProps {
  items: City[];
}
export interface Blog {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  image_alt: string;
}
export interface Course {
  id: string;
  slug: string;
  image: StaticImageData;
  course: {
    title: string;
  };
  date_from: string;
  date_to: string;
  location: string;
  duration: string;
}
export interface Timing {
  id: string;
  city_title: string;
  date_from: string;
  date_to: string;
  price: string;
  duration: string;
}

export interface RegisterFormData {
  full_name: string;
  email: string;
  phone_number: string;
  job_title: string;
  company_name: string;
  city: string;
  country: string;
  responsible_name: string;
  responsible_email: string;
  responsible_phone_number: string;
  responsible_position: string;
  timing_id: number;
}
export interface InquireFormData {
  full_name: string;
  email: string;
  phone_number: string;
  company: string;
  city: string;
  country: string;
  message: string;
  course_id: string;
}
export interface ContactFormData {
  full_name: string;
  email: string;
  phone_number: string;
  company: string;
  country: string;
  message: string;
  subject: string;
}
export interface RegisterProps {
  formData: RegisterFormData;
  setFormData: React.Dispatch<React.SetStateAction<RegisterFormData>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface InquireProps {
  formData: InquireFormData;
  setFormData: React.Dispatch<React.SetStateAction<InquireFormData>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface ContactProps {
  formData: ContactFormData;
  setFormData: React.Dispatch<React.SetStateAction<ContactFormData>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}