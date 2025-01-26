"use client";

import { useThemeContext } from "@/app/ContextAPI_Hooks/usethemeContext";

const AboutBG = () => {
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
      className="absolute top-0 left-0 z-[-1]"
    >
      <g mask='url("#SvgjsMask1257")' fill="none">
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
          d="M23 2160L2183 0L3158 0L998 2160z"
          fill='url("#SvgjsLinearGradient1258")'
        ></path>
        <path
          d="M1413.2 2160L3573.2 0L4719.2 0L2559.2 2160z"
          fill='url("#SvgjsLinearGradient1258")'
        ></path>
        <path
          d="M3638 2160L1478 0L1142 0L3302 2160z"
          fill='url("#SvgjsLinearGradient1259")'
        ></path>
        <path
          d="M2433.8 2160L273.8000000000002 0L-255.69999999999982 0L1904.3000000000002 2160z"
          fill='url("#SvgjsLinearGradient1259")'
        ></path>
        <path
          d="M2515.9680067728423 2160L3840 835.9680067728423L3840 2160z"
          fill='url("#SvgjsLinearGradient1258")'
        ></path>
        <path
          d="M0 2160L1324.0319932271577 2160L 0 835.9680067728423z"
          fill='url("#SvgjsLinearGradient1259")'
        ></path>
      </g>
      <defs>
        <mask id="SvgjsMask1257">
          <rect width="3840" height="2160" fill="#ffffff"></rect>
        </mask>
        <linearGradient
          x1="0%"
          y1="100%"
          x2="100%"
          y2="0%"
          id="SvgjsLinearGradient1258"
        >
          <stop
            stopColor={
              theme === "dark"
                ? "rgba(15, 70, 185, 0.15)"
                : "rgba(228, 63, 90, 0.15)"
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
          id="SvgjsLinearGradient1259"
        >
          <stop
            stopColor={
              theme === "dark"
                ? "rgba(15, 70, 185, 0.20)"
                : "rgba(228, 63, 90, 0.30)"
            }
            offset="0"
          ></stop>
          <stop
            stopOpacity="0"
            stopColor={
              theme === "dark"
                ? "rgba(15, 70, 185, 0.15)"
                : "rgba(12,70,185,0.10)"
            }
            offset="0.66"
          ></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default AboutBG;
