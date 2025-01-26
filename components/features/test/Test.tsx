import * as React from "react";
// import { theme } from "flowbite-react";

interface TestProps {
  theme: string;
  //   setTheme: () => void;
}

const Test: React.FC<TestProps> = () => {
  return (
    <div>
      <p>Test Component</p>
    </div>
  );
};

export default Test;
