import React from "react";

type HorizontalRuleProps = {
  variant?: "default" | "auth-pages";
  classname?: string;
};

const HorizontalRule = ({ variant, classname = "" }: HorizontalRuleProps) => {
  const isAuthPage = variant === "auth-pages";

  return (
    <div>
      <hr
        className={`${isAuthPage ? "h-4 border-gray-600 opacity-20 shadow-lg" : `${classname} opacity-50 shadow-lg`}`}
      />
    </div>
  );
};

export default HorizontalRule;
