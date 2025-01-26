"use client";

import { useThemeContext } from "@/app/ContextAPI_Hooks/usethemeContext";

const ProjectsBG = () => {
  const { theme } = useThemeContext();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xlinkHref="http://www.w3.org/1999/xlink"
      data-svgjs="http://svgjs.dev/svgjs"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 3840 2160"
      //   viewBox="0 0 1920 1080"
    >
      <g mask='url("#SvgjsMask1042")' fill="none">
        <rect
          width="100%"
          height="100%"
          x="0"
          y="0"
          fill={
            theme === "dark" ? "rgba(5, 15, 26, 1)" : "rgba(239, 245, 245, 1)"
          }
        ></rect>
        <path
          d="M181 2160L2341 0L2764 0L604 2160z"
          fill='url("#SvgjsLinearGradient1043")'
        ></path>
        <path
          d="M1409.2 2160L3569.2 0L4082.2 0L1922.2 2160z"
          fill='url("#SvgjsLinearGradient1043")'
        ></path>
        <path
          d="M3646 2160L1486 0L1189 0L3349 2160z"
          fill='url("#SvgjsLinearGradient1044")'
        ></path>
        <path
          d="M2549.8 2160L389.8000000000002 0L158.80000000000018 0L2318.8 2160z"
          fill='url("#SvgjsLinearGradient1044")'
        ></path>
        <path
          d="M2358.786124790328 2160L3840 678.7861247903279L3840 2160z"
          fill='url("#SvgjsLinearGradient1043")'
        ></path>
        <path
          d="M0 2160L1481.213875209672 2160L 0 678.7861247903279z"
          fill='url("#SvgjsLinearGradient1044")'
        ></path>
      </g>
      <defs>
        <mask id="SvgjsMask1042">
          <rect width="100%" height="100%" fill="#ffffff"></rect>
        </mask>
        <linearGradient
          x1="0%"
          y1="100%"
          x2="100%"
          y2="0%"
          id="SvgjsLinearGradient1043"
        >
          <stop
            stopColor={
              theme === "dark" ? "rgba(5, 15, 26, 1)" : "rgba(239, 245, 245, 1)"
            }
            offset="0"
          ></stop>
          <stop
            stopOpacity="0"
            stopColor={
              theme === "dark"
                ? "rgba(15, 70, 185, 0.15)"
                : "rgba(228, 63, 90, 0.20)"
            }
            offset="0.66"
          ></stop>
        </linearGradient>
        <linearGradient
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%"
          id="SvgjsLinearGradient1044"
        >
          <stop
            stopColor={
              theme === "dark"
                ? "rgba(15, 70, 185, 0.15)"
                : "rgba(228, 63, 90, 0.20)"
            }
            offset="0"
          ></stop>
          <stop
            stopOpacity="0"
            stopColor={
              theme === "dark"
                ? "rgba(15, 70, 185, 0.15)"
                : "rgba(228, 63, 90, 0.20)"
            }
            offset="0.66"
          ></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ProjectsBG;
