import * as React from "react";

// $ Data and Images

// $ components
import PageHeading from "@/components/PageHeading";
import MyInfo from "@/components/about/MyInfo";
import MySkills from "@/components/about/MySkills";

const AboutPage = () => {
  return (
    <main id="about" className="w-full bg-slate-200 dark:bg-bgDark pb-8">
      <div className="flex flex-col gap-6 w-full sm:px-[var(--all-pages-spacing)] px-[var(--all-pages-spacing-small)] md:max-w-6xl mx-auto h-auto md:mt-[var(--navbarHeight)]">
        <PageHeading title="About Me" className="bg-slate-200" />
        <MyInfo />
        <MySkills />
      </div>
    </main>
  );
};

export default AboutPage;
