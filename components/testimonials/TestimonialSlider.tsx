"use client";
// $ import react hooks and animation
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// $ import components
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";

// $ import types
import { TestimonialCardProps } from "./TestimonialCard";

type TestimonialsProps = {
  testimonials: TestimonialCardProps[];
};

const TestimonialSlider = ({ testimonials }: TestimonialsProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // $ Get current visible cards
  const getCurrentPageCards = () => {
    const startIndex = currentPage * cardsPerPage;
    return testimonials.slice(startIndex, startIndex + cardsPerPage);
  };

  return (
    <div className="w-full max-w-6xl mx-auto relativeflex items-stretch">
      <div className="relative w-full">
        {/* Navigation Buttons for SM and larger screens - Positioned outside cards */}
        <div className="hidden sm:block">
          <button
            onClick={prevPage}
            className="absolute left-0 top-[50%] -translate-x-16 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg text-blue-500 hover:bg-gray-50 dark:hover:bg-gray-700 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextPage}
            className="absolute right-0 top-[50%] translate-x-16 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg text-blue-500 hover:bg-gray-50 dark:hover:bg-gray-700 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {getCurrentPageCards().map((testimonial) => (
              <div key={testimonial.id} className="flex flex-col h-full">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Mobile View - Single Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[currentPage].email}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="md:hidden col-span-1"
          >
            <TestimonialCard testimonial={testimonials[currentPage]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls for mobile devices, hidden on larger screens */}
      <div className="sm:hidden flex justify-between items-center mt-6">
        <button
          onClick={prevPage}
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg text-blue-500 hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="flex gap-2">
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

        <button
          onClick={nextPage}
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg text-blue-500 hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
