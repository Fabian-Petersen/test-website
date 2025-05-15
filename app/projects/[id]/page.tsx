import React from "react";
import { notFound } from "next/navigation";
import { SkillsDataType } from "@/public/data/mySkillsData";
import PageSubHeading from "@/components/PageSubHeading";
import SkillCard from "@/components/about/SkillCard";
import mySkillsData from "@/public/data/mySkillsData";
import Image from "next/image";

export type ProjectCardDataType = {
  id?: string;
  projectTitle: string;
  language: string;
  category: string;
  thumbnailDescription: string;
  image?: string;
  websiteLink: string;
  githubLink: string;
  singlePage: {
    title: string;
    aim: string;
    skillsApplied: string[];
    architecture: string;
    challenges: string[];
    technologies: string[];
    images: string;
  };
};

const url = process.env.NEXT_PUBLIC_API_URL;

// $ Check if the URL is defined, if not throw and error
if (!url) {
  throw new Error(
    "NEXT_PUBLIC_API_URL is not defined in environment variables"
  );
}

// $ helper function to fetch the data to extract the param id's for staticParams
async function fetchProjects(): Promise<ProjectCardDataType[]> {
  try {
    const response = await fetch(url + "/projects");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // $ Parse the JSON string in the body property if it exists
    if (data.body && typeof data.body === "string") {
      const parsedBody = JSON.parse(data.body);
      return parsedBody;
    }

    // $ If data is already in the correct format, return it directly
    if (Array.isArray(data)) {
      return data;
    }

    throw new Error("Invalid data format received from API");
  } catch (error) {
    console.error("Error fetching projects:", error);
    return []; // Return empty array as fallback
  }
}

// $ Generate static params for each project
export async function generateStaticParams() {
  const projects = await fetchProjects();
  return projects.map((project) => ({
    id: project.id,
  }));
}

// $ Fetch the project data based on the id param and render the page
async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const projects = await fetchProjects();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const projectSkills = project.singlePage?.technologies as string[];
  const skillCards: SkillsDataType[] =
    projectSkills
      ?.map((item) => {
        const skill = mySkillsData.find((skill) => skill?.language === item);
        return skill || null;
      })
      .filter((skill): skill is SkillsDataType => skill !== null) || [];

  // $ Assert type challenge is an array of strings
  // const challenges = project.singlePage?.challenges as string[];

  return (
    <main
      id="project"
      className="w-full bg-bgLight dark:bg-bgDark px-4 min-h-screen mb-[5rem]"
    >
      <div className="flex flex-col gap-8 items-start sm:px-[var(--all-pages-spacing)] px-[var(--all-pages-spacing-small)] md:max-w-6xl mx-auto min-h-screen mt-[10rem] w-full">
        <div className="flex flex-col items-start gap-6 w-full pb-6">
          <section className="divide-y-2 divide-gray-300 dark:divide-gray-400 w-full">
            <PageSubHeading
              title={`Project Title: ${project.singlePage?.title}`}
              size="h2"
              className="mb-4 capitalize"
            />
            <hr />
          </section>

          <section className="flex flex-col space-y-4 items-start w-full h-auto">
            <PageSubHeading title="Aim" size="h3" />
            <p className="text-fontDark dark:text-white leading-relaxed dark:border-gray-400 rounded-lg p-4 w-[100%]">
              {project.singlePage?.aim}
            </p>
          </section>

          <section className="flex flex-col space-y-4 items-start w-full h-auto">
            <PageSubHeading title="Skills Applied" size="h3" />
            <ul className="list-disc pl-5 place-items-start w-full space-y-2 dark:text-white text-fontDark">
              {project.singlePage.skillsApplied.map((item, index) => (
                <li className="w-full capitalize" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {project.singlePage.architecture && (
            <section className="flex flex-col space-y-4 items-start w-full h-auto">
              <PageSubHeading title="Architecture" size="h3" />
              <div className="rounded-lg overflow-hidden w-full border-none">
                <Image
                  src={project.singlePage?.architecture}
                  alt="architecture"
                  width={800}
                  height={400}
                />
              </div>
            </section>
          )}

          <section className="flex flex-col space-y-2 items-start w-full h-auto">
            <PageSubHeading title="Stack used in the Project" size="h3" />
            <div className="grid grid-cols-skillsGallery gap-4 place-items-start w-full">
              {skillCards.map((item) => (
                <SkillCard
                  key={item.id}
                  name={item.language}
                  image={item.iconImage}
                />
              ))}
            </div>
          </section>

          <section className="flex flex-col space-y-2 items-start w-full h-auto">
            <PageSubHeading title="Challenges" size="h3" />
            <ul className="list-disc pl-5 place-items-start w-full space-y-2 dark:text-white text-fontDark">
              {project.singlePage.challenges.map((item, index) => (
                <li className="w-full" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}

export default ProjectPage;
