"use client";

import PageHeading from "@/components/PageHeading";
import Gallery from "@/components/projects/Gallery";
import ProjectFilterButtons from "./ProjectFilterButtons";
import projectsCardData from "@/public/data/projectData";
import { ProjectCardDataType } from "@/public/data/projectData";
import useFilterItems from "@/app/customHooks/useFilterItems";
import { useFetchItem } from "@/lib/reactQueryCutomHooks";

// $ The relative positioning is set on the layout componet to apply to all the pages.

const ProjectsPage = () => {
  // $ Data from the database is fetched using the useFetchItem hook.
  const { data, isPending, isError } = useFetchItem("projects");
  const projects = data ? JSON.parse(data.body) : [];

  // $ Pass the array to be filtered with the filter key "category".
  const { items, uniqueItems, filterByValue } = useFilterItems<
    ProjectCardDataType,
    "category"
  >(projects, "category");

  return (
    <main id="projects" className="w-full bg-bgLight dark:bg-bgDark px-4">
      <div className="flex flex-col gap-6 w-full sm:px-[var(--all-pages-spacing)] px-[var(--all-pages-spacing-small) md:max-w-6xl mx-auto h-auto md:mt-[var(--navbarHeight)]">
        <PageHeading title="Projects" />
        <ProjectFilterButtons
          uniqueItems={uniqueItems.filter(
            (item): item is string => item !== undefined
          )}
          filterByValue={filterByValue}
        />
        <Gallery items={items} isPending={isPending} />
      </div>
    </main>
  );
};

export default ProjectsPage;
