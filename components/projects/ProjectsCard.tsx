import Image from "next/image";
import { ProjectCardDataType } from "@/public/data/projectData";
import CardButtons from "./CardButtons";
import Link from "next/link";
import AnimatePresence from "@/app/animations/AnimatePresence";

type Props = { isPending: boolean; items: ProjectCardDataType[] };
const ProjectsCard = ({
  projectTitle,
  description,
  id,
  image,
  githubLink,
  websiteLink,
}: ProjectCardDataType) => {
  return (
    <div className="group overflow-hidden relative hover:bg-black/60 w-full h-[15rem] hover:border-gray-100 hover:border hover:translate-y-[-2px] mx-auto rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/projects/${id}`}>
        <Image
          className="rounded-lg h-full w-full group-hover:scale-[1.30] group-hover:opacity-40 transition-transform duration-700"
          src={image ?? ""}
          alt={projectTitle ?? ""}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="group-hover:opacity-10 absolute inset-0"></div>
        <div className="absolute inset-0 flex flex-col justify-evenly items-center bg-gradient-to-b from-black/50 to-black/50 px-4 text-center translate-y-[100%] group-hover:translate-y-0 transition-all duration-700 text-white/90">
          <h5 className="text-2xl font-bold tracking-wider capitalize">
            {projectTitle}
          </h5>
          <p className="text-center">{description}</p>
          <CardButtons githubLink={githubLink} websiteLink={websiteLink} />
        </div>
      </Link>
    </div>
  );
};

export default ProjectsCard;
