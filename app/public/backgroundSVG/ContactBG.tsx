"use client";

import { useThemeContext } from "@/app/ContextAPI_Hooks/usethemeContext";

const ContactSVG = () => {
  const { theme } = useThemeContext();
  return (
    <svg
      version="1.1"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 100% 100%"
    >
      <g mask='url("#SvgjsMask1027")' fill="none">
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
          d="M233 2160L2393 0L4086.5 0L1926.5 2160z"
          fill='url("#SvgjsLinearGradient1028")'
        ></path>
        <path
          d="M1471.2 2160L3631.2 0L4393.2 0L2233.2 2160z"
          fill='url("#SvgjsLinearGradient1028")'
        ></path>
        <path
          d="M3686 2160L1526 0L204.5 0L2364.5 2160z"
          fill='url("#SvgjsLinearGradient1029")'
        ></path>
        <path
          d="M2509.8 2160L349.8000000000002 0L-661.1999999999998 0L1498.8000000000002 2160z"
          fill='url("#SvgjsLinearGradient1029")'
        ></path>
        <path
          d="M2109.3385532016846 2160L3840 429.33855320168436L3840 2160z"
          fill='url("#SvgjsLinearGradient1028")'
        ></path>
        <path
          d="M0 2160L1730.6614467983156 2160L 0 429.33855320168436z"
          fill='url("#SvgjsLinearGradient1029")'
        ></path>
      </g>
      <defs>
        <mask id="SvgjsMask1027">
          <rect width="100%" height="100%" fill="#ffffff"></rect>
        </mask>
        <linearGradient
          x1="0%"
          y1="100%"
          x2="100%"
          y2="0%"
          id="SvgjsLinearGradient1028"
        >
          <stop
            stopColor={
              theme === "dark" ? "rgba(5, 15, 26, 1)" : "rgba(239, 245, 245, 1)"
            }
            offset="0"
          ></stop>
          <stop
            stopOpacity="0"
            stopColor="rgba(15, 70, 185, 0.1)"
            offset="0.66"
          ></stop>
        </linearGradient>
        <linearGradient
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%"
          id="SvgjsLinearGradient1029"
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
              theme === "dark" ? "rgba(5, 15, 26, 1)" : "rgba(239, 245, 245, 1)"
            }
            offset="0.66"
          ></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ContactSVG;
