"use client";
import { useState } from "react";
import { handleRegisterForm } from "@/services/forms";
import { RegisterFormData } from "@/types/types";

const InputField: React.FC<{
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ label, name, type = "text", placeholder, value, onChange }) => (
  <div className="flex flex-col w-full mt-4">
    <label className="text-[12px] font-bold leading-5 text-[#293352]">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="mt-2 border border-[#87898FDE] rounded-lg px-2 py-[5px] outline-none"
      placeholder={placeholder}
      required
    />
  </div>
);

const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    full_name: "",
    email: "",
    phone_number: "",
    job_title: "",
    company_name: "",
    city: "",
    country: "",
    responsible_name: "",
    responsible_email: "",
    responsible_phone_number: "",
    responsible_position: "",
    timing_id: 1,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await handleRegisterForm({ formData, setFormData, setLoading });
  };

  return (
    <div className="w-[89%] mx-auto mt-[40px] mb-16">
      <h5 className="text-[36px] font-black leading-[57.24px] text-[#293352]">
        Register
      </h5>

      <form className="mt-6 mb-4" onSubmit={handleSubmit}>
        <h6 className="text-[20px] font-black text-[#293352]">
          Contact Information
        </h6>
        <div className="flex-col md:flex-row flex gap-4">
          <InputField
            label="Full Name"
            name="full_name"
            placeholder="John Doe"
            value={formData.full_name}
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
        </div>
        <div className="flex-col md:flex-row flex gap-4">
          <InputField
            label="Phone Number"
            name="phone_number"
            placeholder="123456789"
            value={formData.phone_number}
            onChange={handleChange}
          />
          <InputField
            label="Job Title"
            name="job_title"
            placeholder="Software Engineer"
            value={formData.job_title}
            onChange={handleChange}
          />
        </div>

        <h6 className="text-[20px] font-black text-[#293352] mt-6">
          Company Information
        </h6>
        <div className="flex-col md:flex-row flex gap-4">
          <InputField
            label="Company Name"
            name="company_name"
            placeholder="TechCorp"
            value={formData.company_name}
            onChange={handleChange}
          />
          <InputField
            label="City"
            name="city"
            placeholder="New York"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <InputField
          label="Country"
          name="country"
          placeholder="USA"
          value={formData.country}
          onChange={handleChange}
        />

        <h6 className="text-[20px] font-black text-[#293352] mt-6">
          Responsible Information
        </h6>
        <div className="flex-col md:flex-row flex gap-4">
          <InputField
            label="Responsible Name"
            name="responsible_name"
            placeholder="Jane Smith"
            value={formData.responsible_name}
            onChange={handleChange}
          />
          <InputField
            label="Responsible Email"
            name="responsible_email"
            type="email"
            placeholder="janesmith@example.com"
            value={formData.responsible_email}
            onChange={handleChange}
          />
        </div>
        <div className="flex-col md:flex-row flex gap-4">
          <InputField
            label="Responsible Phone Number"
            name="responsible_phone_number"
            placeholder="987654321"
            value={formData.responsible_phone_number}
            onChange={handleChange}
          />
          <InputField
            label="Responsible Position"
            name="responsible_position"
            placeholder="HR Manager"
            value={formData.responsible_position}
            onChange={handleChange}
          />
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

export default Register;
