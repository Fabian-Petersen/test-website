"use client";

import * as React from "react";
import LandingPage from "../components/home/LandingPage";
import ContactPage from "@/components/contact/ContactPage";
import ProjectsPage from "@/components/projects/ProjectPage";
import TestimonialPage from "@/components/testimonials/TestimonialPage";
import AboutPage from "@/components/about/AboutPage";

export default function HomePage() {
  return (
    <main className="flex flex-col items-start justify-center h-auto mx-auto overflow-hidden">
      <LandingPage />
      <AboutPage />
      <ProjectsPage />
      <TestimonialPage />
      <ContactPage />
    </main>
  );
}
