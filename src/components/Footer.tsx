import Image from "next/image";
import logo from "../assets/logo.svg";
import email from "@/assets/icons/location.svg";
import mobile_duotone from "@/assets/icons/mobile_duotone.svg";
import phone from "@/assets/icons/phone.svg";
import linkedIn from "@/assets/icons/linkedIn.svg";
import x from "@/assets/icons/x.svg";
import facebook from "@/assets/icons/facebook.svg";
import instagram from "@/assets/icons/instagram.svg";
import location from "@/assets/icons/location.svg";
import Link from "next/link";
interface ListItem {
  label: string;
  link: string;
}
interface ListProps {
  items: ListItem[];
}

export const Footer = () => {
  const quickAccessItems = [
    { label: "Home", link: "/" },
    { label: "Cities", link: "/cities" },
    { label: "Categories", link: "/categories" },
    { label: "About", link: "/about" },
    { label: "Blogs", link: "/blogs" },
    { label: "Sitemap", link: "/sitemap" },
    { label: "Join our Team", link: "/join-our-team" },
  ];
  const userTermsItems = [
    { label: "Terms & Condition", link: "/terms" },
    { label: "Privacy Policy", link: "/privacy" },
    { label: "Contact Us", link: "/contact" },
  ];
  const language = [
    { label: "English", link: "/" },
    { label: "Arabic", link: "/" },
  ];
  const socialLinks = [
    { src: linkedIn, alt: "linkedIn" },
    { src: x, alt: "x" },
    { src: facebook, alt: "facebook" },
    { src: instagram, alt: "instagram" },
  ];

  const infoFooter = [
    {
      src: location,
      text: "C-65, Sector-2, Behind Nirula&#39;s, Noida, Uttar Pradesh 201301",
    },
    { src: email, text: "info@euro-quest.org" },
    { src: mobile_duotone, text: "+971 50 625 2099" },
    { src: phone, text: "+971 4 432 2444" },
  ];

  const categories = [
    { label: "Designing", link: "/" },
    { label: "Programming", link: "/" },
    { label: "Graphics", link: "/" },
    { label: "Front End", link: "/" },
    { label: "Composition", link: "/" },
    { label: "Tailoring", link: "/" },
    { label: "Database", link: "/" },
    { label: "Sport", link: "/" },
    { label: "Cooking", link: "/" },
  ];
  return (
    <footer className="bg-[#293352] text-[#ffffff] py-12">
      <div className="flex-col-reverse md:flex-row w-[92.5%] md:w-[89%] mx-auto flex justify-between px-5">
        <InfoFooter links={infoFooter} />
        <div className="flex-col md:flex-row flex gap-4 md:gap-20">
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold leading-[23.44px] mb-2 md:mb-8 mt-0 relative pl-5 uppercase before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[24px] before:leading-[20px] before:ml-1">
              Categories
            </h4>
            <List items={categories} />
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-semibold leading-[23.44px] mb-2 md:mb-8 mt-0 relative pl-5 uppercase before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[24px] before:leading-[20px] before:ml-1">
              Quick Access
            </h4>
            <List items={quickAccessItems} />
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-semibold leading-[23.44px] mb-2 md:mb-8 mt-0 relative pl-5 uppercase before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[24px] before:leading-[20px] before:ml-1">
              User Terms
            </h4>
            <List items={userTermsItems} />
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-semibold leading-[23.44px] mb-2 md:mb-8 mt-0 relative pl-5 uppercase before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[24px] before:leading-[20px] before:ml-1">
              Language
            </h4>
            <List items={language} />
          </div>
        </div>
      </div>

      <div
        className="
           flex-col gap-2 md:flex-row w-[89%] mx-auto flex justify-between items-center mt-4"
      >
        <Image src={logo} width={430} height={84} alt="logo" />
        <SocialLinks links={socialLinks} />
      </div>
    </footer>
  );
};

const List: React.FC<ListProps> = ({ items }) => (
  <ul className="flex flex-col gap-4 p-0 list-none">
    {items.map((item, index) => (
      <li key={index} className="ml-3">
        <Link
          href={item.link}
          className="text-[13px] leading-[15.23px] font-medium text-[#FFFFFF]"
        >
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
);

const SocialLinks: React.FC<{ links: { src: string; alt: string }[] }> = ({
  links,
}) => (
  <div className="flex gap-8">
    {links.map((link, index) => (
      <a key={index} href="#">
        <Image src={link.src} width={48} height={48} alt={link.alt} />
      </a>
    ))}
  </div>
);

const InfoFooter: React.FC<{ links: { src: string; text: string }[] }> = ({
  links,
}) => (
  <div className="flex flex-col w-[100%] md:w-[28%] gap-4 mt-8 md:mt-0">
    {links.map((link, index) => (
      <div className="flex gap-[6px]" key={index}>
        <Image src={link.src} width={24} height={24} alt="" />
        <p>{link.text}</p>
      </div>
    ))}
    <div>
      <p className="text-[16px] font-black leading-[30px] tracking-[0.25px] text-left">
        EURO QUEST INTERNATIONAL{" "}
      </p>
      <br />
      <span className="text-[19px] font-normal leading-[30px] tracking-[0.25px] text-left capitalize">
        is your strategic partner in developing skills and enhancing
        performance.
      </span>
    </div>
  </div>
);
