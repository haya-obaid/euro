"use client";
import { handleInquireForm } from "@/services/forms";
import { InquireFormData } from "@/types/types";
import { useState } from "react";

const InputField: React.FC<{
  label: string;
  type?: string;
  placeholder?: string;
  isSelect?: boolean;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
}> = ({
  label,
  type = "text",
  placeholder,
  isSelect,
  name,
  value,
  onChange,
}) => (
  <div className="flex flex-col w-full mt-4">
    <label className="text-[12px] font-bold leading-5 text-[#293352]">
      {label}
    </label>
    {isSelect ? (
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="mt-2 border border-[#87898FDE] rounded-lg px-2 py-[5px] outline-none"
        required
      >
        <option value="">Select a Course</option>
        <option value="1">Course 1</option>
        <option value="2">Course 2</option>
        <option value="3">Course 3</option>
      </select>
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-2 border border-[#87898FDE] rounded-lg px-2 py-[5px] outline-none"
        placeholder={placeholder}
        required
      />
    )}
  </div>
);

const Enquire: React.FC = () => {
  const [formData, setFormData] = useState<InquireFormData>({
    full_name: "",
    phone_number: "",
    email: "",
    company: "",
    country: "",
    city: "",
    message: "",
    course_id: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await handleInquireForm({ formData, setFormData, setLoading });
  };

  return (
    <div className="w-[89%] mx-auto mt-[40px]">
      <h5 className="text-[36px] font-black leading-[57.24px] text-[#293352]">
        Enquire
      </h5>
      <form onSubmit={handleSubmit} className="mt-6 mb-[91px]">
        <InputField
          label="Full Name"
          name="full_name"
          placeholder="Aleen"
          value={formData.full_name}
          onChange={handleChange}
        />
        <InputField
          label="Course"
          name="course_id"
          isSelect
          value={formData.course_id}
          onChange={handleChange}
        />
        <InputField
          label="Phone"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="example@gmail.com"
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          label="Company"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
        />
        <InputField
          label="Country"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
        />
        <InputField
          label="City"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />
        <div className="mt-4">
          <label className="text-[12px] font-bold leading-5 text-[#293352]">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full h-[106.5px] border border-[#87898FDE] rounded-lg px-2 py-[5px] outline-none"
            placeholder="Write your message.."
          ></textarea>
        </div>
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            disabled={loading}
            className={`px-[72px] py-[10px] rounded-[10px] text-[14px] leading-5 text-center text-white ${
              loading ? "bg-gray-500 cursor-not-allowed" : "bg-[#293352]"
            }`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Enquire;
