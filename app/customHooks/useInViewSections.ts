// $ This hook uses the IntersectionObserver API to determine which section is in view.
// $ It returns the id of the section that is in view.

import { useState, useEffect } from "react";
import PageLinkData from "@/data/pageLinkData";

const useInViewSections = (sectionIds: string[]) => {
  const [inViewSectionId, setInViewSectionId] = useState<string>("");

  // $ Initialize the IntersectionObserver API
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInViewSectionId(entry.target.id);
          }
        });
      },
      { threshold: 0.9 } // Adjust the threshold as needed
    );

    // $ Observe each section
    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds]);

  return inViewSectionId;
};

export default useInViewSections;
