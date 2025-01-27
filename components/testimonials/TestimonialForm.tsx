"use client";
// $ import react hooks and animation
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

// $ import components
import FormRowInput from "@/components/features/forms/FormRowInput";
import FormRowTextArea from "@/components/features/forms/FormRowTextArea";
import Button from "../features/Button";

// $ import third party libraries
import { z } from "zod";
import { testimonialFormSchema } from "@/app/schemas";

// $ Type for the Testimonial Form
export type TestimonialFormProps = z.infer<typeof testimonialFormSchema>;

// $ import custom hooks
import { useCreateItem } from "@/lib/reactQueryPOST";
import { useValidateFormZod } from "@/app/customHooks/useValidateFormData";
import PageSubHeading from "../PageSubHeading";

const initialFormValues = {
  name: "",
  email: "",
  position: "",
  company: "",
  image: "",
  message: "",
};

const TestimonialForm = () => {
  const { createItem, isPending } = useCreateItem("testimonials");

  const router = useRouter();
  // const isDevelopment = process.env.NODE_ENV === "development";
  const [formData, setFormData] =
    useState<TestimonialFormProps>(initialFormValues);
  const {
    setFormStatus,
    validateForm,
    formErrors,
    setFormErrors,
    getInputStyle,
    formStatus,
  } = useValidateFormZod(formData, testimonialFormSchema);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    const form = e.currentTarget;

    console.log(formData);
    createItem(formData, {
      onSuccess: () => {
        setFormStatus("success");
        console.log(formData);
        setFormData(initialFormValues);
        setTimeout(() => {
          setFormStatus("idle");
          form.reset();
          // router.push("/#testimonials");
        }, 3000);
      },
      onError: (error) => {
        setFormStatus("error");
        console.error(error);
      },
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (formErrors[name]) {
      const newErrors = { ...formErrors };
      delete newErrors[name];
      setFormErrors(newErrors);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[35rem] w-full flex flex-col sm:grid sm:grid-cols-2 mx-auto p-4 py-6 gap-6 outline-none rounded-md shadow-md shadow-gray-400 dark:shadow-gray-800 bg-gray-100 dark:bg-gray-800"
    >
      <div className="col-span-2 mr-auto tracking-wider text-fontDark dark:text-fontLight pb-4">
        <PageSubHeading title="Write a Testimonial" size="h3" />
      </div>
      <div className="space-y-1">
        <FormRowInput
          id="name"
          labelText="Full Name"
          name="name"
          type="text"
          value={formData.name}
          placeholderText="Your full name"
          className={`${getInputStyle("name")} bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark`}
          onChange={handleChange}
        />
        {formErrors.name && (
          <p className="text-red-500 text-xs">{formErrors.name}</p>
        )}
      </div>
      <div>
        <FormRowInput
          id="email"
          labelText="Email"
          name="email"
          type="email"
          placeholderText="Your email address"
          className={`${getInputStyle("name")} bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark`}
          onChange={handleChange}
          // defaultValues={isDevelopment ? defaultTestData.email : ""}
        />
        {formErrors.email && (
          <p className="text-red-500 text-xs">{formErrors.email}</p>
        )}
      </div>
      <div>
        <FormRowInput
          id="position"
          labelText="Position"
          name="position"
          type="text"
          placeholderText="Your job title"
          className={`${getInputStyle("name")} bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark`}
          onChange={handleChange}
          // defaultValues={isDevelopment ? defaultTestData.position : ""}
        />
        {formErrors.position && (
          <p className="text-red-500 text-xs">{formErrors.position}</p>
        )}
      </div>
      <div>
        <FormRowInput
          id="company"
          labelText="Company"
          name="company"
          type="text"
          placeholderText="Your company name"
          className={`${getInputStyle("name")} bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark`}
          onChange={handleChange}
        />
        {formErrors.company && (
          <p className="text-red-500 text-xs">{formErrors.company}</p>
        )}
      </div>
      <div className="space-y-1 col-span-2">
        <FormRowInput
          id="image"
          labelText="Profile Image URL (Optional)"
          name="image"
          type="url"
          placeholderText="Link to your profile picture"
          className={`${getInputStyle("name")} bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark`}
          onChange={handleChange}
        />
        {formErrors.image && (
          <p className="text-red-500 text-xs">{formErrors.image}</p>
        )}
      </div>
      <div className="space-y-1 col-span-2">
        <FormRowTextArea
          id="message"
          labelText="Your Testimonial"
          row={4}
          name="message"
          value={formData.message}
          placeholderText="Share your experience working with me..."
          className={`${getInputStyle("name")} bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark`}
          onChange={handleChange}
        />
        {formErrors.message && (
          <p className="text-red-500 text-xs">{formErrors.message}</p>
        )}
      </div>
      <div className="flex gap-4 justify-center sm:justify-end w-full col-span-2 text-md flex-stretch">
        <Button
          type="button"
          buttonLabel="Cancel"
          onClick={() => router.push("/")}
          className="hover:text-white border border-red-400 hover:translate-y-[-0.8px] hover:bg-red-400 py-2 px-6 rounded-full transition-all duration-200 bg-transparent dark:text-white text-red-400 h-full flex-1"
        />
        <Button
          type="submit"
          buttonLabel={isPending ? "Sending..." : "Submit"}
          className={`hover:text-white hover:bg-blue-500 border-none h-full py-2 px-6  hover:translate-y-[-0.8px] rounded-full transition-all duration-200 text-white flex-1 ${
            isPending
              ? "bg-gray-400 cursor-not-allowed"
              : formStatus === "success"
                ? "bg-green-500 hover:bg-green-700"
                : "bg-blue-500 hover:bg-blue-700"
          }`}
          disabled={isPending}
        />
      </div>
    </form>
  );
};

export default TestimonialForm;
