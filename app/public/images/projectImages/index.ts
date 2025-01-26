import tours from "./tours.jpg";
import comingSoon from "./comingSoon.jpg";
import cockTails from "./cocktail-project-screenshot.jpg";
import teaProject from "./tea.jpeg";
import githubProject from "./github-users-project.svg";
import { StaticImageData } from "next/image";

// $ import the images from the public/images/projectImages folder as StaticImageData where the key is of type string and the value is of type StaticImageData
const ProjectImages: { [key: string]: StaticImageData } = {
  teaProject: teaProject,
  toursProject: tours,
  cocktailsProject: cockTails,
  pendingProject: comingSoon,
  githubProject,
};

export default ProjectImages;
