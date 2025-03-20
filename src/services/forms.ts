import { DOMAIN } from "@/constants/baseUrl";
import {
  ContactProps,
  InquireProps,
  RegisterProps,
} from "@/types/types";

// ================== Contact Form Submit =====================
export async function handleContactForm({
  formData,
  setFormData,
  setLoading,
}: ContactProps) {
  try {
    const response = await fetch(`${DOMAIN}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to send message.");
    }

    console.log("Message sent successfully!");
    setFormData({
      full_name: "",
      phone_number: "",
      email: "",
      country: "",
      company: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
}
// ================== Register Form Submit ====================
export async function handleRegisterForm({
  formData,
  setFormData,
  setLoading,
}: RegisterProps) {
  try {
    const response = await fetch(`${DOMAIN}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) throw new Error("Failed to submit form");
    setFormData({
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
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
}

// ================== Inquire Form Submit =====================
export async function handleInquireForm({
  formData,
  setFormData,
  setLoading,
}: InquireProps) {
  try {
    const response = await fetch(`${DOMAIN}/inquire`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("Enquiry submitted successfully!");
      setFormData({
        full_name: "",
        phone_number: "",
        email: "",
        company: "",
        country: "",
        city: "",
        message: "",
        course_id: "",
      });
    } else {
      console.log("Failed to submit enquiry.");
    }
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
}
