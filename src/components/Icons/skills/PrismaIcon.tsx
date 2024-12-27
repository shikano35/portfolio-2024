import React from "react";

export function PrismaIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#2D3748"
        d="M50 0C22.386 0 0 22.386 0 50s22.386 50 50 50 50-22.386 50-50S77.614 0 50 0zm0 90C26.745 90 10 73.255 10 50S26.745 10 50 10s40 16.745 40 40-16.745 40-40 40z"
      />
      <path
        fill="#6D6D6D"
        d="M50 10c-22.092 0-40 17.908-40 40s17.908 40 40 40 40-17.908 40-40-17.908-40-40-40z"
      />
      <path
        fill="#F7B32B"
        d="M50 15c-19.328 0-35 15.672-35 35s15.672 35 35 35 35-15.672 35-35-15.672-35-35-35z"
      />
      <path
        fill="#9B74D1"
        d="M50 25c-13.805 0-25 11.195-25 25s11.195 25 25 25 25-11.195 25-25-11.195-25-25-25z"
      />
    </svg>
  );
}
