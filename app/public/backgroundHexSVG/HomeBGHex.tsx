"use client";
// $ This component only renders the background image of the home page. Similar components are used for all other pages.

// $ Import the custom hook that provides the background color and stroke color.
import useBackgroundColorHook from "../useBackgroundColorHook";

const HomeBGHex = () => {
  const { fillColor, strokeColor } = useBackgroundColorHook();

  const url: string = `data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='100%' height='100%' preserveAspectRatio='none' viewBox='0 0 100% 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1087%26quot%3b)' fill='none'%3e%3crect width='100%' height='100%' x='0' y='0' fill="${fillColor}"%3e%3c/rect%3e%3cpath d='M97.08 -41.33L183.69 8.67L183.69 108.67L97.08 158.67L10.47 108.67L10.47 8.67zM183.69 108.67L270.29 158.67L270.29 258.67L183.69 308.67L97.08 258.67L97.08 158.67zM97.08 258.67L183.69 308.67L183.69 408.67L97.08 458.67L10.47 408.67L10.47 308.67zM356.89 408.67L443.5 458.67L443.5 558.67L356.89 608.67L270.29 558.67L270.29 458.67zM530.11 408.67L616.71 458.67L616.71 558.67L530.11 608.67L443.5 558.67L443.5 458.67zM616.71 -41.33L703.32 8.67L703.32 108.67L616.71 158.67L530.11 108.67L530.11 8.67zM789.92 258.67L876.53 308.67L876.53 408.67L789.92 458.67L703.32 408.67L703.32 308.67zM1049.74 108.67L1136.34 158.67L1136.34 258.67L1049.74 308.67L963.13 258.67L963.13 158.67zM963.13 258.67L1049.74 308.67L1049.74 408.67L963.13 458.67L876.53 408.67L876.53 308.67zM1049.74 408.67L1136.34 458.67L1136.34 558.67L1049.74 608.67L963.13 558.67L963.13 458.67zM1222.94 108.67L1309.55 158.67L1309.55 258.67L1222.94 308.67L1136.34 258.67L1136.34 158.67zM1136.34 558.67L1222.94 608.67L1222.94 708.67L1136.34 758.67L1049.73 708.67L1049.73 608.67zM1309.55 -41.33L1396.15 8.67L1396.15 108.67L1309.55 158.67L1222.94 108.67L1222.94 8.67zM1396.15 108.67L1482.76 158.67L1482.76 258.67L1396.15 308.67L1309.55 258.67L1309.55 158.67zM1309.55 258.67L1396.15 308.67L1396.15 408.67L1309.55 458.67L1222.94 408.67L1222.94 308.67zM1396.15 408.67L1482.76 458.67L1482.76 558.67L1396.15 608.67L1309.55 558.67L1309.55 458.67zM1482.76 -41.33L1569.37 8.67L1569.37 108.67L1482.76 158.67L1396.15 108.67L1396.15 8.67zM1482.76 258.67L1569.37 308.67L1569.37 408.67L1482.76 458.67L1396.15 408.67L1396.15 308.67zM1569.37 408.67L1655.97 458.67L1655.97 558.67L1569.37 608.67L1482.76 558.67L1482.76 458.67z' stroke="${strokeColor}"
   stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1087'%3e%3crect width='100%' height='100%' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e`;

  return (
    <div className="absolute top-0 left-0 z-[-100] h-full w-full bg-cover bg-center">
      <img className="w-full h-full" src={url} alt="backgroundImage" />
    </div>
  );
};

export default HomeBGHex;
