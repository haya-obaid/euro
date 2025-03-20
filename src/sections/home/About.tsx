import Image from "next/image"
import img_about from '@/assets/Frame 1000006755.png'
import { TitleSection } from "@/components/TitleSection"


export const About = () => {
  return (
    <section className="bg-[#F8F8F8] p-1">
      <TitleSection title='ABOUT EURO QUEST ACADEMEY' desc='Innovativeness within the framework of leading strategically as well as managing changes.' color='#000000' />

      <div className="flex-col w-[89%] flex md:flex-row mx-auto justify-center gap-11">
        <Image src={img_about} alt="" width={624} height={476} />
        <div className="about-description w-full md:w-[48%]">
          <h1 className="text-[20px] leading-[20.11px] md:text-[48px] md:leading-[72px] font-normal text-[#293352]"> EUROQUEST</h1>
          <p className="text-xs leading-[15.08px] md:text-[14px] font-normal md:leading-[30px] text-[#080808] my-6 capitalize ">
            Balanced Score Training Center is an international training institute that seeks to enhance organizational performance and professional skills through its structured programs across different organizational levels. Our aim is to help organizations and people with creative training and consulting solutions that combine theoretical knowledge with practical application, with a view to achieving effective and lasting outcomes          </p>
          <button className="text-[14px] leading-5 font-normal text-center px-6 py-[10px] rounded-[10px] cursor-pointer border-none bg-[#293352] text-[#ffffff]">
            Explore more
          </button>
        </div>
      </div>
    </section>
  )
}
