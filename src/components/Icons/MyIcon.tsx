import React from "react";

export function MyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 816.37732 1145.1973"
      height="1145.1973"
      width="816.37732"
      {...props}
    >
      <defs>
        <linearGradient id="gradient-animation" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#50ffff" />
          <stop offset="100%" stopColor="#50ffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g transform="matrix(1.3333333,0,0,-1.3333333,0,1145.1973)">
        <g>
          <g transform="translate(594.4393,429.4488)">
            <path
              style={{
                fill: "var(--icon-fill-light)",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none",
              }}
              d="m 0,0 c 0,-159.222 -129.075,-288.298 -288.298,-288.298 -159.222,0 -288.297,129.076 -288.297,288.298 0,159.222 129.075,288.298 288.297,288.298 C -129.075,288.298 0,159.222 0,0"
            />
          </g>
          <g transform="translate(435.5718,523.1504)">
            <path
              d="m 0,0 c 0,0 -146.939,96.939 -241.837,-60.204 0,0 -81.632,-80.612 -41.836,-84.694 39.795,-4.082 316.161,136.687 316.326,92.857 0.128,-33.858 -51.02,-92.947 -51.02,-92.947 0,0 -68.864,-116.421 -197.436,-53.156"
              style={{
                fill: "none",
                stroke: "var(--icon-stroke-dark)",
                strokeWidth: 3,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeOpacity: 0.1,
              }}
            />
            <path
              d="m 0,0 c 0,0 -146.939,96.939 -241.837,-60.204 0,0 -81.632,-80.612 -41.836,-84.694 39.795,-4.082 316.161,136.687 316.326,92.857 0.128,-33.858 -51.02,-92.947 -51.02,-92.947 0,0 -68.864,-116.421 -197.436,-53.156"
              style={{
                fill: "none",
                stroke: "url(#gradient-animation)",
                strokeWidth: 3,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeDasharray: "500 1500",
                strokeOpacity: 7.5,
              }}
            >
              <animate
                attributeName="stroke-dashoffset"
                values="500;-500;-1500"
                dur="5s"
                keyTimes="0; 0.5; 1"
                keySplines="0.25 0.1 0.25 1; 0 0 0 0"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>
      </g>
    </svg>
  );
}
