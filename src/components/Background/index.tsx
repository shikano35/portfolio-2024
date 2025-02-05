import Image from "next/image";
import React from "react";

export function Background() {
  return (
    <div className="absolute inset-0 -z-40 -top-14 blur-3xl opacity-20 select-none pointer-events-none [mask-image:linear-gradient(to_bottom_left,white_10%,transparent_90%)] dark:[mask-image:linear-gradient(to_bottom_left,white_20%,transparent_70%)]">
      <Image
        alt="background"
        draggable={false}
        fill
        priority
        src="/background.png"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
