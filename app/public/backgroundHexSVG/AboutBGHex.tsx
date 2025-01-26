"use client";
// $ This component only renders the background image of the home page. Similar components are used for all other pages.

// $ Import the custom hook that provides the background color and stroke color.
import useBackgroundColorHook from "../useBackgroundColorHook";

const HomeBGHex = () => {
  // $ Variables for the SVG color to make it easier to update the url
  // $ Fill and Stroke colors control the background (fill) color and the hexagon (stroke) colors.
  // $ The variable also make it easier to update the colors via the theme
  const { fillColor, strokeColor } = useBackgroundColorHook();

  const url: string = `data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='100%' height='100%' preserveAspectRatio='none' viewBox='0 0 100% 100%'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1165%26quot%3b)' fill='none'%3e%3crect width='100%' height='100%' x='0' y='0' fill='${fillColor}'%3e%3c/rect%3e%3cpath d='M264.71 74.32L336.59 115.82L336.59 198.82L264.71 240.32L192.82 198.82L192.82 115.82zM336.59 696.82L408.47 738.32L408.47 821.32L336.59 862.82L264.71 821.32L264.71 738.32zM480.35 198.82L552.24 240.32L552.24 323.32L480.35 364.82L408.47 323.32L408.47 240.32zM767.88 -50.18L839.76 -8.68L839.76 74.32L767.88 115.82L696 74.32L696 -8.68zM767.88 447.82L839.76 489.32L839.76 572.32L767.88 613.82L696 572.32L696 489.32zM911.65 198.82L983.53 240.32L983.53 323.32L911.65 364.82L839.76 323.32L839.76 240.32zM983.53 323.32L1055.41 364.82L1055.41 447.82L983.53 489.32L911.65 447.82L911.65 364.82zM1127.29 323.32L1199.17 364.82L1199.17 447.82L1127.29 489.32L1055.41 447.82L1055.41 364.82zM1127.29 821.32L1199.17 862.82L1199.17 945.82L1127.29 987.32L1055.41 945.82L1055.41 862.82zM1199.17 198.82L1271.06 240.32L1271.06 323.32L1199.17 364.82L1127.29 323.32L1127.29 240.32zM1271.06 323.32L1342.94 364.82L1342.94 447.82L1271.06 489.32L1199.17 447.82L1199.17 364.82zM1199.17 696.82L1271.06 738.32L1271.06 821.32L1199.17 862.82L1127.29 821.32L1127.29 738.32zM1342.94 198.82L1414.82 240.32L1414.82 323.32L1342.94 364.82L1271.06 323.32L1271.06 240.32zM1486.7 -50.18L1558.59 -8.68L1558.59 74.32L1486.7 115.82L1414.82 74.32L1414.82 -8.68zM1558.59 572.32L1630.47 613.82L1630.47 696.82L1558.59 738.32L1486.7 696.82L1486.7 613.82z' stroke='${strokeColor}' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1165'%3e%3crect width='100%' height='100%' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e`;

  return (
    <div className="absolute top-0 left-0 z-[-100] h-full w-full">
      <img
        className="w-full min-h-screen"
        src={url}
        alt="aboutpage-background-image"
      />
    </div>
  );
};

export default HomeBGHex;
