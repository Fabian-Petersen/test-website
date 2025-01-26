import axios from "axios";
import { contactFormSchema } from "../schemas/index";
import { toast } from "react-toastify";

const useHandleSubmitContacts = () => {
  // $ Define the Zod schema for validation

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData);

    // $ Validate form data with Zod
    const validationResult = contactFormSchema.safeParse(formDataObject);
    if (!validationResult.success) {
      console.error(validationResult.error.errors);
      return;
    }

    try {
      // POST request to AWS API Gateway
      const response = await axios.post("api/contacts", formDataObject);

      if (response.status === 200) {
        toast.success("Form submitted successfully!");
      } else {
        toast.error("Unexpected response from server.");
      }
    } catch (error) {
      toast.error("Failed to submit the form.");
    } finally {
      // Safely reset the form regardless of success or failure
      // revalidatePath("/contacts");
      form.reset();
    }
  };

  return { handleSubmit };
};

export default useHandleSubmitContacts;
