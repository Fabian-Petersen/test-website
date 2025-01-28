import React from "react";
import TestimonialForm from "@/components/testimonials/TestimonialForm";

function Testimonial() {
  return (
    <main className="w-full grid bg-slate-200 dark:bg-bgDark py-32 h-screen">
      <div className="w-full">
        <div className="sm:px-[var(--all-pages-spacing)] px-[var(--all-pages-spacing-small)] md:max-w-6xl mx-auto grid grid-cols-1 place-content-center h-full">
          <TestimonialForm />
        </div>
      </div>
    </main>
  );
}

export default Testimonial;
