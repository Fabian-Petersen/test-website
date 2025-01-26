import * as z from "zod";

// $ Schema for the Login Form
export const LoginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z
    .string()
    .min(1, {
      message: "Please enter a valid password",
    })
    .refine(
      (value) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/g.test(
          value
        ),
      {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&)",
      }
    ),
});

// $ Contact Form Schema
export const contactFormSchema = z.object({
  username: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(20, "Name cannot exceed 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message cannot exceed 500 characters"),
});

// $ Schema for the Projects Upload Form
export const projectsFormSchema = z.object({
  projectTitle: z
    .string()
    .min(1, { message: "Please enter a valid email address" }),
  // description: z
  //   .string()
  //   .min(0, { message: "Please enter a valid description" }),
  // aim: z.string().min(0, { message: "Please enter a valid aim" }),
  // typeOfProject: z.string().min(0, {
  //   message: "Please select a valid project type",
  // }),
  // websiteLink: z.string().url({ message: "Please enter a valid URL" }),
  // githubLink: z.string().url({ message: "Please enter a valid URL" }),
  // // singlePage: z.object({
  // //   aim: z.string().min(1, { message: "Please enter a valid aim" }),
  // projectDetails: z.string().min(0, {
  //   message: "Please enter a valid description",
  // }),
  // challenges: z.string().min(0, { message: "Please enter a valid challenges" }),
  // ! fix the bug using the select input, the value expected by the form is a string[] and string is returned
  // projectStack: z.array(z.string()).min(1, {
  //   message: "Please enter a valid skills set",
  // }),
  // image: z.string().min(1, { message: "Please enter a valid image" }),
  // }),
});

// $ CV MultiStep Form Schemas
// # Personal Info Schema
export const personalInfoSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required" }),
  lastName: z.string().min(1, { message: "Last Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .min(1, { message: "Phone number is required" })
    .regex(/^\d{10}$/, {
      message: "Invalid phone number format. It should be 10 digits.",
    }),
  location: z.string().min(1, { message: "Location is required" }),
  summary: z.string().min(1, { message: "Summary is required" }),
});

// $ Testimonial Form Schema
export const testimonialFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  position: z.string().min(2, "Position must be at least 2 characters"),
  company: z.string().min(2, "Company must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  image: z.string().optional(),
});
