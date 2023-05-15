import React from "react";

function ReviewsIcon({size = 32}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      stroke="currentcolor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8 8h8m-8 4h5m-6 6.5V21l5-5h8v-6M7 16H4V4h16v2"
      ></path>
    </svg>
  );
}

export default ReviewsIcon;
