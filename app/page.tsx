"use client";

import * as React from "react";
import LandingPage from "../components/home/LandingPage";
import ContactPage from "@/components/contact/ContactPage";

export default function HomePage() {
  return (
    <main className="flex flex-col items-start justify-center h-auto mx-auto overflow-hidden">
      <LandingPage />
      <ContactPage />
    </main>
  );
}
