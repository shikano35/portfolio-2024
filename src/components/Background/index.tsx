import React from "react";
import Image from "next/image";

export function Background() {
  return (
    <Image
      priority={true}
      draggable={false}
      src="/pattern.png"
      alt="Pattern"
      layout="fill"
      style={{ objectFit: "cover" }}
      className="select-none pointer-events-none absolute inset-x-0 -top-14 -z-40 blur-3xl opacity-25 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)] dark:[mask-image:linear-gradient(to_bottom_left,white_10%,transparent_70%)]"
    />
  );
}
