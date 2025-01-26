import React from "react";
import pageLinkData from "@/data/pageLinkData";
import { usePathname } from "next/navigation";
import { useGlobalContext } from "@/app/useGlobalContext";

type PageLink = {
  id: number;
  href: string;
  icon: any;
  name: string;
};

const MobileNavMenuLinks = () => {
  const { navOpen } = useGlobalContext()!;
  const pathname = usePathname();
  return (
    <div
      className={`grid place-content-center absolute top-20 right-0 overflow-x-hidden transition-transform duration-1000 h-[var(--sectionHeight)] w-full bg-bgDark ${
        navOpen ? "transform translate-x-0" : "transform translate-x-full"
      }`}
    >
      <ul className="flex flex-col flex-1 gap-12 p-12 text-[1.5rem] w-[15rem] justify-evenly">
        {pageLinkData.map((link) => {
          const { id, url, name } = link;
          return (
            <li
              key={id}
              className={pathname === url ? "text-blue-600" : "text-gray-400"}
            >
              <a
                href={url}
                className="relative capitalize text-[1.3rem] sm:text-[1.6rem] block py-2 overflow-hidden group left-[50%] -translate-x-[25%]"
              >
                {name}
                <span className="absolute p-2 z-[-1] top-0 left-0 w-[70%] md:w-full h-full border-b-4 border-green-500 transform -translate-x-full transition-transform duration-1000 group-hover:translate-x-0"></span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileNavMenuLinks;
