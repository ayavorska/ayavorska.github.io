import React from "react";

function SalesIcon({size = 32}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      ariaLabelledby="dolarIconTitle"
      color="currentcolor"
      viewBox="0 0 24 24"
    >
      <path d="M12 4v2m0 12v2m3.5-12C15.167 6.667 14 6 12 6 9 6 8.5 7.957 8.5 9c0 4.14 7 1.965 7 6 0 1.043-.5 3-3.5 3-2 0-3.167-.667-3.5-2"></path>
    </svg>
  );
}

export default SalesIcon;