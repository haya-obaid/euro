"use client";
import { useState } from "react";
import icon_1 from "../../../assets/icons/contact-email.png";
import icon_2 from "../../../assets/icons/mobile_duotone.png";
import icon_3 from "../../../assets/icons/Phone_light.png";
import Image, { StaticImageData } from "next/image";
import report from "../../../assets/recaptcha.png";
import { handleContactForm } from "@/services/forms";
import { ContactFormData } from "@/types/types";

export default function Page() {
  const [isNotRobot, setIsNotRobot] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    full_name: "",
    phone_number: "",
    email: "",
    country: "",
    company: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isNotRobot) return;
    setLoading(true);
  await handleContactForm({formData, setFormData, setLoading});
  };

  return (
    <div className="w-[89%] mx-auto mt-12 mb-5">
      <h3 className="text-[40px] font-black leading-[72px] text-[#293352]">
        Contact us
      </h3>
      <div className="flex-col-reverse md:flex-row flex justify-between">
        <form
          className="w-[92.5%] mx-auto md:mx-0 md:w-[55%] flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <div className="flex-col md:flex-row flex justify-between">
            <InputField
              label="First Name"
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
            />
            <InputField
              label="Company"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="flex-col md:flex-row flex justify-between">
            <InputField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <InputField
              label="Phone Number"
              type="text"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
            />
          </div>
          <InputField
            label="Subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <div className="flex flex-col">
            <label className="text-xs font-normal leading-5 text-[#293352]">
              Message
            </label>
            <textarea
              name="message"
              className="h-[117.6px] px-2 py-[5px] border border-[#87898FDE] rounded-lg outline-none placeholder:text-[12px] placeholder:text-[#8D8D8D8F]"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="flex-col md:flex-row flex justify-between">
            <div className="flex items-center justify-between gap-5 border border-[#434343] px-4 py-2 rounded-lg">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="not-a-robot"
                  checked={isNotRobot}
                  onChange={() => setIsNotRobot(!isNotRobot)}
                  className="mr-2"
                />
                <label htmlFor="not-a-robot" className="text-xs text-[#293352]">
                  I&#39;m not a robot
                </label>
              </div>
              <Image src={report} width={41} height={41} alt="Recaptcha" />
            </div>

            <button
              type="submit"
              disabled={!isNotRobot || loading}
              className={`flex justify-center items-center bg-[#293352] px-6 py-[10px] text-[14px] text-[#FFFFFF] leading-5 rounded-[10px] ${
                !isNotRobot ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send message"}
            </button>
          </div>
        </form>

        <div className="flex flex-col gap-4">
          <ContactInfoItem
            icon={icon_1}
            title="EMAIL"
            content="info@euro-quest.org"
          />
          <ContactInfoItem
            icon={icon_2}
            title="MOBILE"
            content="+971 50 625 2099"
          />
          <ContactInfoItem
            icon={icon_3}
            title="PHONE"
            content="+971 4 432 2444"
          />
        </div>
      </div>
    </div>
  );
}

const InputField: React.FC<{
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ label, type, name, value, onChange }) => (
  <div className="w-full flex flex-col md:w-[42%]">
    <label className="text-xs font-normal leading-5 text-[#293352]">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-2 py-[5px] border border-[#87898FDE] rounded-lg outline-none placeholder:text-[12px] placeholder:text-[#8D8D8D8F]"
    />
  </div>
);

const ContactInfoItem: React.FC<{
  icon: StaticImageData;
  title: string;
  content: string;
}> = ({ icon, title, content }) => (
  <div
    className="flex items-center px-6 py-4 rounded-2xl gap-2"
    style={{ boxShadow: "0px 2px 6px 2px rgba(0, 0, 0, 0.15)" }}
  >
    <span className="w-16 h-16 bg-[#293352] flex items-center justify-center rounded-full text-[#FFFFFF] text-[20px]">
      <Image src={icon} alt="" width={27} height={27} />
    </span>
    <div>
      <h4 className="text-[12px] font-light leading-[15px] text-[#293352] mb-2">
        {title}
      </h4>
      <p className="text-[15px] font-normal leading-[18.86px] text-[#293352]">
        {content}
      </p>
    </div>
  </div>
);
