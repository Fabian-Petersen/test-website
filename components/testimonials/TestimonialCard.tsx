import { Quote } from "lucide-react";
import Image from "next/image";
import useIsMobile from "@/app/customHooks/useScreenSize";

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
  const isMobile = useIsMobile(640); // Use 768px as breakpoint for mobile

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col items-center p-4 lg:h-[25rem] md:h-[23rem] sm:h-[20rem]">
      <div className="flex-none h-8">
        <Quote
          className={`${
            isMobile ? "w-8 h-8" : "w-10 h-10"
          }  text-blue-500 flex-shrink-0`}
        />
      </div>
      <div className="flex-none mt-4 mb-4">
        <div className="size-24 lg:size-28 rounded-full overflow-hidden my-2 bg-blue-500 flex items-center justify-center">
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
      </div>
      {/* //$ Message section - scrollable if content overflows */}
      <div className="flex-1 overflow-y-auto no-scrollbar w-full">
        <p className="text-gray-600 dark:text-gray-300 text-center text-clampTestimonialBodyText">
          {testimonial.message}
        </p>

        <div className="text-center mt-4 flex-none">
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
