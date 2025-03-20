
import about_1 from '../../../assets/Vision-About.png'
import Image, { StaticImageData } from "next/image";
import about_2 from '../../../assets/about-goal.jpg'
import about_3 from '../../../assets/about-trainers.jpg'

interface SectionProps {
    title: string;
    content: string[];
    imageSrc: StaticImageData;
}

const About: React.FC = () => {
    const goalsContent = [
        "Provide Human Resources with the knowledge, skills and trends that enhance performance.",
        "Develop the professional practices of trainees in alignment with the latest professional developments in the field of training.",
        "Increase the number of training centers worldwide.",
        "Expand professional cooperation relations with the international institutions concerned with training and human resources development.",
        "Continue to be an active leader in capacity building at both the regional and international levels.",
        "Seek to obtain international professional accreditation for the training programs."
    ];

    const trainersContent = [
        "Reputation and outreach contributions",
        "Language proficiencies",
        "Creative capabilities",
        "Academic degree and specialization",
        "Real-life experience",
        "Professional certificates.",
        "Distinguished training capabilities"
    ];
    return (
        <div>

            <div className=" w-[89%] mx-auto  mt-16 text-center">
                <h3 className="text-[40px] font-black leading-[57.24px] text-[#293352] pt-10 tracking-[-0.67px]">About EURO QUEST</h3>
                <p className="text-[20px] font-normal leading-[25.14px] text-[#293352] mt-6 tracking-[-0.67px]">
                    EuroQuest International is a leading educational institute that provides high-quality training and learning experiences tailored to meet our clients&#39; needs. We aim to facilitate both professional and personal excellence while enhancing organizational effectiveness. By developing and delivering world-class management development services, we align with the latest management thinking and strategies. We strive to transform personal, team, and company performance through high-powered solutions that empower managers and develop leaders. We are committed to delivering services that are always relevant and applicable, maintaining a customer-focused approach to ensure our clients&#39; current and future success
                </p>
            </div>

            <div className=" w-[89%] mx-auto  mt-16 text-center">
                <h3 className="text-[40px] font-black leading-[57.24px] text-[#293352] pt-10 tracking-[-0.67px]">Our Mission & Vision</h3>

                <div className="flex-col-reverse md:flex-row flex justify-between">
                    <div className="w-[90%] mt-8 md:mt-0 flex flex-col md:w-[55%] gap-7">
                        <div className="text-left">
                            <h4 className="text-[24px] font-bold leading-[30.17px] text-[#000000]  tracking-[-0.67px]">Our Vision</h4>
                            <p className="text-[16px] font-normal leading-[20.11px] text-[#000000] tracking-[-0.67px] mt-2">Achieving positive training impact on the performance of recipients of our training services. Incorporating the best training methods, techniques, and trainers. Retaining the highest level of training quality in all aspects.</p>
                        </div>
                        <div className="text-left">
                            <h4 className="text-[24px] font-bold leading-[30.17px] text-[#000000]  tracking-[-0.67px]">Our Mission</h4>
                            <p className="text-[16px] font-normal leading-[20.11px] text-[#000000] tracking-[-0.67px] mt-2">
                                E.Q.I is one of the leading international institutions that provide high-quality services of training and human resources development focussing on the three components of human performance (knowledge, skills, and trends) for all participants.
                            </p>
                        </div>
                    </div>

                    <Image src={about_1} width={471} height={310} alt="" />
                </div>
            </div>

            <Section title="Our Goals" content={goalsContent} imageSrc={about_2} />


            <div className="w-[89%] mx-auto mt-16 text-center mb-[104px]">
                <h3 className="text-[40px] font-black leading-[57.24px] text-[#293352] pt-10 tracking-[-0.67px]">Our Trainers</h3>
                <div className="flex-col-reverse md:flex-row flex justify-between mt-6">
                    <ul className="ml-3 mt-4 flex flex-col gap-6 text-left md:m-0">
                        {trainersContent.map((item, index) => (
                            <li key={index} className="text-[16px] font-normal leading-[20.11px] text-[#000000] list-disc">{item}</li>
                        ))}
                    </ul>
                    <Image src={about_3} width={471} height={310} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;


const Section: React.FC<SectionProps> = ({ title, content, imageSrc }) => (
    <div className="bg-[#F8F8F8] py-[70.5px] mt-10">
        <div className="w-[89%] mx-auto text-center">
            <h3 className="text-[40px] font-black leading-[57.24px] text-[#293352] pt-10 tracking-[-0.67px] mb-6">{title}</h3>
            <div className="flex-col md:flex-row flex gap-16 justify-between">
                <Image src={imageSrc} width={471} height={310} alt="" />
                <div className="flex flex-col gap-4 text-left">
                    {content.map((text, index) => (
                        <p key={index} className="text-[16px] font-normal leading-[20.11px]">{text}</p>
                    ))}
                </div>
            </div>
        </div>
    </div>
);


