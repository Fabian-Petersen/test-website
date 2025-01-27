import React, { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";
import { TestimonialCardProps } from "./TestimonialCard";
import useIsMobile from "@/app/customHooks/useScreenSize"; // Using the existing hook

type TestimonialsProps = {
  testimonials: TestimonialCardProps[];
};

const TestimonialSlider = ({ testimonials }: TestimonialsProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const isMobile = useIsMobile(768); // Use 768px as breakpoint for mobile
  const cardsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setCurrentPage((prev) => {
      const nextPage = prev + newDirection;
      if (nextPage < 0) return totalPages - 1;
      if (nextPage >= totalPages) return 0;
      return nextPage;
    });
  };

  const handleDragEnd = (e: PointerEvent, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  // Get current visible cards
  const getCurrentPageCards = () => {
    const startIndex = currentPage * cardsPerPage;
    return testimonials.slice(startIndex, startIndex + cardsPerPage);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full max-w-6xl mx-auto relative">
      <div className="relative w-full min-h-[400px]">
        {/* Desktop Navigation - Hidden on Mobile */}
        {!isMobile && (
          <>
            <button
              onClick={() => paginate(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg text-blue-500 hover:bg-gray-50 dark:hover:bg-gray-700 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg text-blue-500 hover:bg-gray-50 dark:hover:bg-gray-700 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Desktop View */}
        {!isMobile && (
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getCurrentPageCards().map((testimonial) => (
              <div key={testimonial.id} className="flex flex-col h-full">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </motion.div>
        )}

        {/* Mobile View with Swipe */}
        {isMobile && (
          <div className="overflow-hidden touch-pan-y">
            <AnimatePresence initial={false} custom={currentPage}>
              <motion.div
                key={currentPage}
                custom={currentPage}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={handleDragEnd}
                className="w-full absolute"
              >
                <TestimonialCard testimonial={testimonials[currentPage]} />
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* Mobile Pagination Dots */}
        {isMobile && (
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentPage
                    ? "w-6 bg-blue-500"
                    : "w-2 bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialSlider;
