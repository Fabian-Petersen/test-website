"use client";

import { useThemeContext } from "@/app/ContextAPI_Hooks/usethemeContext";

const HomeBG = () => {
  const { theme } = useThemeContext();
  return (
    <svg
      // xmlns="http://www.w3.org.1500/svg"
      version="1.1"
      // xlinkHref="http://www.w3.org/1999/xlink"
      // data-svgjs="http://svgjs.dev/svgjs"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 3840 2160"
      className="absolute top-0 left-0 z-[-1]"
    >
      <g mask='url("#SvgjsMask1161")' fill="none">
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
          d="M227 2160L2387 0L3758 0L1598 2160z"
          fill='url("#SvgjsLinearGradient1162")'
        ></path>
        <path
          d="M1495.2 2160L3655.2 0L5165.7 0L3005.7 2160z"
          fill='url("#SvgjsLinearGradient1162")'
        ></path>
        <path
          d="M3801 2160L1641 0L468 0L2628 2160z"
          fill='url("#SvgjsLinearGradient1163")'
        ></path>
        <path
          d="M2503.8 2160L343.8000000000002 0L-1169.6999999999998 0L990.3000000000002 2160z"
          fill='url("#SvgjsLinearGradient1163")'
        ></path>
        <path
          d="M2680.8912839716986 2160L3840 1000.8912839716988L3840 2160z"
          fill='url("#SvgjsLinearGradient1162")'
        ></path>
        <path
          d="M0 2160L1159.1087160283012 2160L 0 1000.8912839716988z"
          fill='url("#SvgjsLinearGradient1163")'
        ></path>
      </g>
      <defs>
        <mask id="SvgjsMask1161">
          <rect width="100%" height="100%" fill="#ffffff"></rect>
        </mask>
        <linearGradient
          x1="0%"
          y1="100%"
          x2="100%"
          y2="0%"
          id="SvgjsLinearGradient1162"
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
          id="SvgjsLinearGradient1163"
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

export default HomeBG;
