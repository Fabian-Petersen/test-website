import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      darkMode: "class",
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        // Add custom breakpoints if needed:
        "3xl": "1920px",
        "4xl": "2560px",
      },
      fontSize: {
        clampBodyText: "clamp(0.8rem, 0.75xvw, 1.125rem)",
        clampH2: "clamp(1.5rem, 3vw, 1.75rem)",
        clampH3: "clamp(1rem, 2vw, 1.3rem)",
        clampFooterHeading: "clamp(1.5rem, 1.5vw, 2rem)",
        clampFooterLogoText: "clamp(2rem, 2vw, 2.5rem)",
        clampLogo: "clamp(1.5rem, 3vw, 2rem)",
        clampNavLinks: "clamp(0.8rem, 3vw, 1rem)",
        clampHeroImage: "clamp(15rem, 5vw + 0.5rem, 25rem)",
        clampPageHeading: "clamp(1.3rem, 5vw + 0.5rem, 3rem)",
        clampTestimonialText: "clamp(1rem, 3vw, 3rem)",
      },
      keyframes: {
        buttonPing: {
          "0%, 100": {
            opacity: "1",
            scale: "1",
          },
          "50%": {
            opacity: "0.5",
            scale: "0.5",
          },
        },
        customPing: {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
        openNavBar: {
          "0%": {
            transform: "translate-x-[-100%]",
          },
          "100%": {
            transform: "translate-x-0",
          },
        },
        closeNavBar: {
          "0%": {
            transform: "translate-x-[0]",
          },
          "100%": {
            transform: "translate-x-[-100%]",
          },
        },
      },
      height: {
        dvh: "100dvh",
      },
      gridTemplateColumns: {
        gallery: "repeat(auto-fill, minmax(250px, 1fr))",
        footer: "repeat(auto-fill, minmax(150px, 1fr))",
        skillsGallery: "repeat(auto-fill, minmax(50px, 100px))",
      },
      colors: {
        primaryColor: "#e43f5a",
        buttonBlueColor: "#3a7ff9",
        formPageBgColor: "##eaecf0",
        formPageBgColorDark: "rgb(43, 39, 56)",
        bgformColor: "#d1d5db",
        bgformColorDark: "",
        formColorDark: "",
        bgDark: "#0B192C",
        footerDark: "#213555",
        navbarLight: "",
        navbarDark: "#2D3250",
        // bgLight: "#eff5f5",
        bgLight: "#f1f5f9",
        facebookGray: "#eff2f5",
        fontLight: "#ededed",
        fontDark: "rgb(24, 49, 83)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        // border: "hsl(var(--border))", This border was added to the footer, dont know why
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      backgroundImage: {},
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    before: {
      beforeDefault: {
        content: "",
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      greatvibes: ["Great Vibes", "cursive"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
