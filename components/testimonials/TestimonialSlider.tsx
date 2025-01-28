import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";
import { TestimonialCardProps } from "./TestimonialCard";

type TestimonialsProps = {
  testimonials: TestimonialCardProps[];
};

const TestimonialSlider = ({ testimonials }: TestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
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

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
      }
      return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
    });
  };

  // Calculate visible cards based on current index
  const getVisibleCards = () => {
    const cards = [];
    const startIndex = currentIndex;

    // Add current card
    cards.push({
      testimonial: testimonials[startIndex],
      isActive: true,
    });

    // Add next cards if available
    for (let i = 1; i < 3; i++) {
      const nextIndex = (startIndex + i) % testimonials.length;
      cards.push({
        testimonial: testimonials[nextIndex],
        isActive: false,
      });
    }

    return cards;
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 flex gap-4 flex-col items-center">
      <div className="relative w-full">
        {/* Navigation Buttons */}
        <div className="absolute sm:left-0 left-10 md:left-12 top-1/2 -translate-y-1/2 -translate-x-16 z-10 hidden md:block">
          <button
            onClick={() => paginate(-1)}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg text-blue-500 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        <div className="absolute sm:right-0 md:right-12 right-10 top-1/2 -translate-y-1/2 translate-x-16 z-10 hidden md:block">
          <button
            onClick={() => paginate(1)}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg text-blue-500 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-flow-col gap-2 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {getVisibleCards().map((card, index) => (
            <div
              key={card.testimonial.id}
              className={`
                ${index === 0 ? "block" : "hidden"} 
                ${index === 1 ? "sm:block hidden" : ""} 
                ${index === 2 ? "lg:block hidden" : ""}
              `}
            >
              {index === 0 ? (
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
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
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);
                      if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                      } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                      }
                    }}
                  >
                    <TestimonialCard testimonial={card.testimonial} />
                  </motion.div>
                </AnimatePresence>
              ) : (
                <div className="hidden md:block">
                  <TestimonialCard testimonial={card.testimonial} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="absolute top-1/2 w-full flex justify-between md:hidden">
          <button
            onClick={() => paginate(-1)}
            className="-translate-x-6 p-2 rounded-full bg-white dark:bg-gray-700 shadow-lg text-blue-500 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="translate-x-6 p-2 rounded-full bg-white dark:bg-gray-700 shadow-lg text-blue-500 hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      {/* // $Mobile Navigation Indicators*/}
      <div className="flex justify-center gap-2 md:hidden">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-6 bg-blue-500"
                : "w-2 bg-gray-300 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
