"use client";

import { ProjectCardDataType } from "@/public/data/projectData";
import Link from "next/link";
import { Tooltip } from "flowbite-react";

type Props = {
  githubLink: string;
  websiteLink: string;
};
const CardButtons = ({ githubLink, websiteLink }: Props) => {
  return (
    <div className="flex gap-4 mx-auto">
      <Tooltip
        className="capitalize tracking-wide"
        content="Github"
        placement="top"
      >
        {githubLink && (
          <button
            type="button"
            className="hover:animation-buttonPing hover:cursor-pointer p-2 text-white bg-[#3676c4]/40 hover:bg-[#3676c4]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-full text-sm text-center flex justify-center items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
            onClick={() => window.open(githubLink)}
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </Tooltip>
      {websiteLink ? (
        <Tooltip
          className="capitalize tracking-wide"
          content="Website"
          placement="top"
        >
          <button
            type="button"
            className="hover:cursor-pointer p-2 text-white bg-[#3676c4]/40 hover:bg-[#3676c4]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-full text-sm text-center flex justify-center items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
            onClick={() => window.open(websiteLink)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
            </svg>
          </button>
        </Tooltip>
      ) : (
        <Tooltip
          className="capitalize tracking-wide"
          content="Not Deployed"
          placement="top"
        >
          <button
            type="button"
            className="hover:cursor-pointer p-2 text-white bg-[#3676c4]/40 hover:bg-[#3676c4]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-full text-sm text-center flex justify-center items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
          >
            <svg height="16" width="16" viewBox="0 0 512 512" fill="#d4db00">
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
            </svg>
          </button>
        </Tooltip>
      )}
    </div>
  );
};

export default CardButtons;
