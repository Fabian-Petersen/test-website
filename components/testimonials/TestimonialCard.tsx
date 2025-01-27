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
            width={100}
            height={100}
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
