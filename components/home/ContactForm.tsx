"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, AlertCircle, Loader } from "lucide-react";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = React.useState<FormErrors>({});
  const [touched, setTouched] = React.useState<Record<string, boolean>>({});
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = React.useState("");

  // Validation functions
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone: string) => {
    if (!phone) return true; // Phone is optional
    const regex = /^[\d\s\-\+\(\)]{10,}$/;
    return regex.test(phone);
  };

  const validateField = (name: string, value: string) => {
    const newErrors: FormErrors = {};

    switch (name) {
      case "name":
        if (!value.trim()) {
          newErrors.name = "Name is required";
        } else if (value.trim().length < 2) {
          newErrors.name = "Name must be at least 2 characters";
        }
        break;
      case "email":
        if (!value.trim()) {
          newErrors.email = "Email is required";
        } else if (!validateEmail(value)) {
          newErrors.email = "Please enter a valid email address";
        }
        break;
      case "phone":
        if (value && !validatePhone(value)) {
          newErrors.phone = "Please enter a valid phone number";
        }
        break;
      case "subject":
        if (!value.trim()) {
          newErrors.subject = "Subject is required";
        } else if (value.trim().length < 3) {
          newErrors.subject = "Subject must be at least 3 characters";
        }
        break;
      case "message":
        if (!value.trim()) {
          newErrors.message = "Message is required";
        } else if (value.trim().length < 10) {
          newErrors.message = "Message must be at least 10 characters";
        }
        break;
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const newErrors = validateField(name, value);
      setErrors((prev) => ({ ...prev, ...newErrors }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const newErrors = validateField(name, value);
    setErrors((prev) => ({ ...prev, ...newErrors }));
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    Object.keys(formData).forEach((key) => {
      if (key === "phone") return; // Phone is optional
      const fieldErrors = validateField(
        key,
        formData[key as keyof typeof formData]
      );
      Object.assign(newErrors, fieldErrors);
    });

    return newErrors;
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setTouched({
        name: true,
        email: true,
        phone: true,
        subject: true,
        message: true,
      });
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus("error");
        setFeedback(result.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setFeedback(result.message || "Thank you! Your message has been received. We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setTouched({});
      setErrors({});

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setFeedback("");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setFeedback(
        "Unable to submit the form right now. Please try again later."
      );
    }
  }

  const formFields = [
    { name: "name", label: "Full Name", type: "text", placeholder: "Your name" },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "your@email.com",
    },
    {
      name: "phone",
      label: "Phone Number (Optional)",
      type: "tel",
      placeholder: "+91 (11) 1234-5678",
    },
    {
      name: "subject",
      label: "Subject",
      type: "text",
      placeholder: "What is this about?",
    },
  ];

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.subject &&
    formData.message &&
    validateEmail(formData.email) &&
    (!formData.phone || validatePhone(formData.phone));

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {formFields.map((field, idx) => (
        <motion.div
          key={field.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.05 }}
        >
          <label className="block text-sm font-semibold text-slate-950 mb-2">
            {field.label}
          </label>
          <div className="relative">
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name as keyof typeof formData]}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={field.placeholder}
              className={`w-full rounded-lg border px-4 py-3 text-slate-950 placeholder-slate-400 focus:outline-none transition ${
                touched[field.name] && errors[field.name as keyof FormErrors]
                  ? "border-red-400 bg-red-50 focus:border-red-600"
                  : "border-slate-300 bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-200"
              }`}
            />
            {touched[field.name] && !errors[field.name as keyof FormErrors] && (
              <CheckCircle className="absolute right-3 top-3.5 h-5 w-5 text-green-500" />
            )}
          </div>
          {touched[field.name] && errors[field.name as keyof FormErrors] && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1 text-xs font-medium text-red-600 flex items-center gap-1"
            >
              <AlertCircle className="h-3.5 w-3.5" />
              {errors[field.name as keyof FormErrors]}
            </motion.p>
          )}
        </motion.div>
      ))}

      {/* Message Field */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <label className="block text-sm font-semibold text-slate-950 mb-2">
          Message <span className="text-red-600">*</span>
        </label>
        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Tell us how we can help..."
            rows={5}
            className={`w-full rounded-lg border px-4 py-3 text-slate-950 placeholder-slate-400 focus:outline-none transition resize-none ${
              touched.message && errors.message
                ? "border-red-400 bg-red-50 focus:border-red-600"
                : "border-slate-300 bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-200"
            }`}
          />
          {touched.message && !errors.message && (
            <CheckCircle className="absolute right-3 top-3 h-5 w-5 text-green-500" />
          )}
        </div>
        {touched.message && errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-xs font-medium text-red-600 flex items-center gap-1"
          >
            <AlertCircle className="h-3.5 w-3.5" />
            {errors.message}
          </motion.p>
        )}
        <p className="mt-1 text-xs text-slate-500">
          {formData.message.length}/500 characters
        </p>
      </motion.div>

      {/* Feedback Messages */}
      {feedback && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`rounded-lg p-4 flex items-start gap-3 ${
            status === "success"
              ? "bg-teal-50 border border-teal-200"
              : "bg-red-50 border border-red-200"
          }`}
        >
          {status === "success" ? (
            <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
          )}
          <p
            className={
              status === "success" ? "text-teal-900 text-sm" : "text-red-900 text-sm"
            }
          >
            {feedback}
          </p>
        </motion.div>
      )}

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={status === "loading" || !isFormValid}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        whileHover={!status === "loading" && isFormValid ? { scale: 1.02 } : {}}
        whileTap={!status === "loading" && isFormValid ? { scale: 0.98 } : {}}
        className={`w-full rounded-lg px-6 py-3 font-semibold text-white transition flex items-center justify-center gap-2 ${
          isFormValid && status !== "loading"
            ? "bg-blue-600 hover:bg-blue-700 cursor-pointer"
            : "bg-slate-400 cursor-not-allowed opacity-70"
        }`}
      >
        {status === "loading" && (
          <Loader className="h-5 w-5 animate-spin" />
        )}
        {status === "loading" ? "Sending..." : "Send Message"}
      </motion.button>

      <p className="text-xs text-slate-500 text-center">
        We typically respond within 24-48 hours on business days.
      </p>
    </form>
  );
}
