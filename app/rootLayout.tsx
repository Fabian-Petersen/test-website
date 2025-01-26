"use client";
// $ Layout for the whole app, including the navbar.
// $ The pages for the about, projects, and contact pages will be rendered here, however similarities on those pages are managed in the portfolio layout.
// $ The MobileNavbar is rendered on small screens and the Navbar is rendered on larger screens.
// $ The Social Icons and Nav Links are rendered on larger screens, the MobileNavbar handles those on smaller screens.

// $ Components
import Navbar from "@/components/features/navbar/Navbar";
import Header from "@/components/header/Header";

// $ Context Providers
import Providers from "./providers";

// $ Import custom hook to check if the size is mobile or not to change Navbar components
import useIsMobile from "./customHooks/useScreenSize";
import { useHashScroll } from "./customHooks/useHashScrollHandler";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  useHashScroll();
  const isMobile = useIsMobile(640);
  return (
    <html lang="en" className="font-poppins light">
      <body className="bg-bgLight dark:bg-bgDark">
        <Providers>
          {isMobile ? <Header /> : <Navbar />}
          {isMobile && <Header />}
          {children}
        </Providers>
      </body>
    </html>
  );
}
