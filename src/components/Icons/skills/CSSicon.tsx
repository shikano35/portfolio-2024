import React from "react";

export function CSSIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520" {...props}>
      <path fill="#264DE4" d="M71 460L30 0h391l-41 460-154 47z" />
      <path fill="#2965F1" d="M226 480l124-36 35-398H226z" />
      <path
        fill="#EBEBEB"
        d="M226 208H129l4 47h93v48H133l4 47h89v87l-77-22-5-51H94l9 97 123 34v-1z"
      />
      <path
        fill="#FFF"
        d="M226 208v47h90l-4-47zm0 95v47h53l-4-47zm0 142v-87h44l5 51 77-22 9-97H226z"
      />
    </svg>
  );
}
