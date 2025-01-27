import { Quote } from "lucide-react";
import Image from "next/image";

export type TestimonialCardProps = {
  id: string;
  name: string;
  position: string;
  company: string;
  message: string;
  image?: string;
  email?: string;
};

// Sample testimonials data
export const testimonialsMockData: TestimonialCardProps[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    name: "John Smith",
    position: "Senior Developer at TechCorp",
    company: "TechCorp",
    image: "/testimonials/john.jpg",
    message:
      "Working with this developer was an absolute pleasure. Their attention to detail and problem-solving skills are exceptional.",
  },
  {
    id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    name: "Sarah Johnson",
    position: "Project Manager at InnovateCo",
    company: "InnovateCo",
    message:
      "Exceptional work ethic and technical expertise. Always delivers high-quality code on time.",
    image: "/testimonials/sarah.jpg",
  },
  {
    id: "7c9e6679-7425-40de-944b-e07fc1f90ae7",
    name: "Mike Wilson",
    position: "CTO at StartupX",
    company: "StartupX",
    message:
      "A talented developer who brings both technical excellence and creative solutions to every project.",
  },
];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: TestimonialCardProps;
}) => {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full flex-1 flex flex-col items-center p-6 h-full">
      <Quote className="w-8 h-8 text-blue-500 flex-shrink-0" />

      <div className="w-16 h-16 lg:size-28 rounded-full overflow-hidden my-4 bg-blue-500 flex items-center justify-center">
        {testimonial.image ? (
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-white text-clampTestimonialText font-bold">
            {getInitials(testimonial.name)}
          </span>
        )}
      </div>

      <div className="flex flex-col items-center flex-1 w-full">
        <div className="flex-1 overflow-y-auto scrollbar-hide w-full">
          <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
            {testimonial.message}
          </p>
        </div>

        <div className="text-center mt-4 flex-shrink-0">
          <h4 className="font-semibold text-gray-800 dark:text-white">
            {testimonial.name}
          </h4>
          <p className="text-blue-500 text-sm">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
