import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center loadingRing">
      Loading<span className="loadingDot"></span>
    </div>
  );
};

export default LoadingSpinner;
