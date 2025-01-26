import React from "react";
import pageLinkData from "@/data/pageLinkData";
import { ProjectCardDataType } from "@/public/data/projectData";
import { useFetchItem } from "@/lib/reactQueryCutomHooks";

type ProjectLinkProps = {
  className: string;
};

const ProjectFooterLinks: React.FC<ProjectLinkProps> = ({ className }) => {
  const { data, isError, error } = useFetchItem("projects");
  const projects: ProjectCardDataType[] = data ? JSON.parse(data.body) : [];

  if (isError) {
    console.log(error?.message);
  }

  return (
    <article className={`dark:text-fontLight text-fontDark`}>
      <ul className={`${className} hover:cursor-pointer`}>
        {projects.slice(0, 4).map((project) => (
          <li key={project.id}>
            <a href={project.websiteLink}>{project.projectTitle}</a>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ProjectFooterLinks;
