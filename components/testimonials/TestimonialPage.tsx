"use client";

// $ components
import PageHeading from "../PageHeading";
import TestimonialSlider from "./TestimonialSlider";

import { useFetchItem } from "@/lib/reactQueryCutomHooks";

const TestimonialPage = () => {
  // $ Data from the database is fetched using the useFetchItem hook.
  const { data, isPending, isError } = useFetchItem("testimonials");
  const testimonials = data ? JSON.parse(data.body) : [];

  if (isError)
    return (
      <div className="flex justify-center text-2xl">
        Error Loading Testimonials...
      </div>
    );

  return (
    <main
      id="testimonials"
      className="w-full bg-bgLight dark:bg-bgDark h-auto pb-8"
    >
      <div className="flex flex-col gap-6 w-full sm:px-[var(--all-pages-spacing)] px-[var(--all-pages-spacing-small)] md:max-w-6xl mx-auto md:mt-[var(--navbarHeight)]">
        <PageHeading title="Testimonials" className="bg-slate-200" />
        <div className="flex flex-col items-center h-full my-auto w-full">
          {isPending ? (
            <div className="justify-center align-middle dark:text-white text-fontDark tracking-wider text-xl">
              Loading...
            </div>
          ) : (
            <TestimonialSlider testimonials={testimonials} />
          )}
        </div>
      </div>
    </main>
  );
};

export default TestimonialPage;
