// $ Data for the Footer Links
import pageLinkData from "@/data/pageLinkData";
import FooterLogo from "./FooterLogo";
import { useFetchItem } from "@/lib/reactQueryCutomHooks";

// $ Types
import { ProjectCardDataType } from "@/public/data/projectData";

// $ Components
import SocialsLinkIcons from "../SocialsLinkIcons";
import FooterHeadings from "./FooterHeadings";
// import QuickLinks from "./QuickLinks";
// import ProjectFooterLinks from "./ProjectFooterLinks";
import FooterLinks from "./FooterLinks";

function Footer() {
  // $ Get the Projects Data from the Server
  const { data } = useFetchItem("projects");
  const projectsLinks: ProjectCardDataType[] = data
    ? JSON.parse(data.body)
    : [];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="absolute z-[100] border border-t-gray-800/30 shadow-border bg-footerDark text-white mx-auto h-auto w-full text-sm pt-4">
      <main className="md:max-w-6xl mx-auto grid sm:grid-cols-footer md:flex gap-6 justify-between h-auto px-4 py-4 pb-12">
        <FooterLogo />
        <div className="flex flex-col gap-2 capitalize justify-start">
          <FooterHeadings heading="Quick Links" />
          <FooterLinks
            data={pageLinkData}
            numberOfItems={pageLinkData.length}
            className="flex flex-col sm:gap-4"
          />
        </div>
        <div className="flex flex-col gap-2 capitalize justify-start">
          <FooterHeadings heading="Latest Projects" />
          <FooterLinks
            data={projectsLinks.map((link) => ({
              name: link.projectTitle, // Rename `projectTitle` to `name`
              url: link.websiteLink, // Rename `websiteLink` to `url`
              id: link.id, // Keep `id` as-is
            }))}
            numberOfItems={projectsLinks.length}
            className="flex flex-col sm:gap-4"
          />
        </div>
        <div className="sm:space-y-4 space-y-6">
          <FooterHeadings heading="Socials" />
          <SocialsLinkIcons />
        </div>
      </main>
      <p className="flex justify-center pt-5 pb-1">
        &copy; {currentYear} Designed by Fabian Petersen.
      </p>
    </footer>
  );
}

export default Footer;
