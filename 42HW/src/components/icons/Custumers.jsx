import React from "react";

function CustumersIcon({size = 32}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentcolor"
      stroke="currentcolor"
      viewBox="0 0 24 24"
    >
      <g>
        <g>
          <g
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M17 11L23 11"></path>
            <path d="M20 8L20 14"></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default CustumersIcon;