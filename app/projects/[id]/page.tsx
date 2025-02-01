import React from "react";
import { notFound } from "next/navigation";
import type { ProjectCardDataType } from "@/public/data/projectData";
import { SkillsDataType } from "@/public/data/mySkillsData";
import PageSubHeading from "@/components/PageSubHeading";
import SkillCard from "@/components/about/SkillCard";
import HorizontalRule from "@/components/features/HorizontalRule";
import mySkillsData from "@/public/data/mySkillsData";

const url = process.env.NEXT_PUBLIC_API_URL;

if (!url) {
  throw new Error(
    "NEXT_PUBLIC_API_URL is not defined in environment variables"
  );
}

// Updated helper function to properly parse the response
async function fetchProjects(): Promise<ProjectCardDataType[]> {
  try {
    const response = await fetch(url + "/projects");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Raw response:", data);

    // Parse the JSON string in the body property if it exists
    if (data.body && typeof data.body === "string") {
      const parsedBody = JSON.parse(data.body);
      console.log("Parsed projects:", parsedBody);
      return parsedBody;
    }

    // If data is already in the correct format, return it directly
    if (Array.isArray(data)) {
      return data;
    }

    throw new Error("Invalid data format received from API");
  } catch (error) {
    console.error("Error fetching projects:", error);
    return []; // Return empty array as fallback
  }
}

export async function generateStaticParams() {
  const projects = await fetchProjects();
  return projects.map((project) => ({
    id: project.id,
  }));
}

async function ProjectPage({ params }: { params: { id: string } }) {
  const projects = await fetchProjects();
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  const projectSkills = project.singlePage?.skills as string[];
  const skillCards: SkillsDataType[] =
    projectSkills
      ?.map((item) => {
        const skill = mySkillsData.find((skill) => skill?.language === item);
        return skill || null;
      })
      .filter((skill): skill is SkillsDataType => skill !== null) || [];

  return (
    <main
      id="project"
      className="w-full bg-bgLight dark:bg-bgDark px-4 min-h-screen"
    >
      <div className="flex flex-col gap-6 items-start sm:px-[var(--all-pages-spacing)] px-[var(--all-pages-spacing-small)] md:max-w-6xl mx-auto h-auto mt-[10rem] w-full">
        <div className="flex flex-col items-start space-y-4 w-full">
          <PageSubHeading
            title={`Project Title: ${project.singlePage?.title}`}
            size="h2"
            className="mb-2"
          />
          <HorizontalRule classname="border border-red-500 w-full" />

          <section className="flex flex-col space-y-2 items-start">
            <PageSubHeading title="Aim" size="h3" />
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.singlePage?.aim}
            </p>
          </section>

          <section className="flex flex-col space-y-2 items-start">
            <PageSubHeading title="Description" size="h3" />
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.singlePage?.description}
            </p>
          </section>

          <section className="flex flex-col space-y-2 items-start">
            <PageSubHeading title="Challenges" size="h3" />
            <div className="flex flex-col gap-4 text-gray-600 dark:text-gray-300 leading-relaxed" />
          </section>

          <section className="flex flex-col space-y-2 items-start w-full">
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
        </div>
      </div>
    </main>
  );
}

export default ProjectPage;
