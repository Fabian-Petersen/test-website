"use client";

import { useState } from "react";
import React, { FormEvent } from "react";
import FormRowInput from "../features/forms/FormRowInput";
import FormRowTextArea from "../features/forms/FormRowTextArea";
import Button from "../features/Button";
import { useCreateItem } from "@/app/lib/reactQueryPOST";
import { contactFormSchema } from "@/app/schemas";

export type ContactFormDataProps = {
  id?: string;
  email: string;
  message: string;
  username: string;
};

type FormErrors = {
  [key: string]: string;
};

const ContactForm = () => {
  const { createItem, isPending } = useCreateItem("contacts");
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formStatus, setFormStatus] = useState<"idle" | "error" | "success">(
    "idle"
  );

  // $ Validate form data with Zod
  const validateForm = (formData: ContactFormDataProps) => {
    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      const errors: FormErrors = {};
      result.error.errors.forEach((error) => {
        if (error.path) {
          errors[error.path[0]] = error.message;
        }
      });
      setFormErrors(errors);
      setFormStatus("error");
      return false;
    }
    setFormErrors({});
    return true;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const formDataObject: ContactFormDataProps = {
      username: formData.get("username") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    // $ Validate form data with Zod

    if (!validateForm(formDataObject)) return;

    createItem(formDataObject, {
      onSuccess: () => {
        setFormStatus("success");
        console.log(formDataObject);
        form.reset();
        setTimeout(() => {
          setFormStatus("idle");
        }, 3000);
      },
      onError: (error) => {
        setFormStatus("error");
        console.error(error);
      },
    });
  };

  // ! Create utils function to handle the input style
  const getInputStyle = (fieldName: string) => {
    const baseStyle =
      "w-full p-2 rounded outline-none transition-all duration-200 ";

    if (formErrors[fieldName]) {
      return (
        baseStyle +
        "border-2 border-red-500 focus:ring-2 focus:ring-red-500 bg-red-50"
      );
    }

    if (formStatus === "success") {
      return (
        baseStyle +
        "border-2 border-green-500 focus:ring-2 focus:ring-green-500 bg-green-50"
      );
    }

    return (
      baseStyle +
      "border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 bg-gray-200 dark:bg-gray-700"
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[25rem] w-full flex flex-col mx-auto p-4 gap-6 outline-none rounded-md shadow-md shadow-gray-400 dark:shadow-gray-800 bg-gray-100 dark:bg-gray-800"
    >
      <h2 className="py-2 font-semibold text-gray-600 dark:text-white tracking-[2px] capitalize text-clampH3">
        Send Me a Message...
      </h2>
      <div className="space-y-1">
        <FormRowInput
          id="username"
          labelText="name"
          name="username"
          type="text"
          placeholderText="name"
          className={`${getInputStyle(
            "username"
          )} bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark`}
          onChange={() => {
            if (formErrors.username) {
              const newErrors = { ...formErrors };
              delete newErrors.username;
              setFormErrors(newErrors);
            }
          }}
        />
        {formErrors.username && (
          <p className="text-red-500 text-sm">{formErrors.username}</p>
        )}
      </div>
      <div className="space-y-1">
        <FormRowInput
          id="email"
          labelText="email"
          name="email"
          type="email"
          placeholderText="email"
          className={`${getInputStyle(
            "email"
          )} bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark`}
          onChange={() => {
            if (formErrors.email) {
              const newErrors = { ...formErrors };
              delete newErrors.email;
              setFormErrors(newErrors);
            }
          }}
        />
        {formErrors.email && (
          <p className="text-red-500 text-sm">{formErrors.email}</p>
        )}
      </div>
      <div className="space-y-1">
        <FormRowTextArea
          id="message"
          labelText="message"
          row={4}
          name="message"
          placeholderText="message"
          className={`${getInputStyle(
            "message"
          )} bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark`}
          onChange={() => {
            if (formErrors.message) {
              const newErrors = { ...formErrors };
              delete newErrors.message;
              setFormErrors(newErrors);
            }
          }}
        />
        {formErrors.message && (
          <p className="text-red-500 text-sm">{formErrors.message}</p>
        )}
      </div>
      <Button
        type="submit"
        className={`py-2 px-4 rounded tracking-wider uppercase transition-colors duration-200 dark:text-fontLight text-white ${
          isPending
            ? "bg-gray-400 cursor-not-allowed"
            : formStatus === "success"
            ? "bg-green-500 hover:bg-green-700"
            : "bg-blue-500 hover:bg-blue-700"
        }`}
        buttonLabel={isPending ? "Sending..." : "Submit Message"}
        disabled={isPending}
      />

      {formStatus === "success" && (
        <p className="text-green-500 text-sm text-center">
          Message sent successfully!
        </p>
      )}
    </form>
  );
};

export default ContactForm;
