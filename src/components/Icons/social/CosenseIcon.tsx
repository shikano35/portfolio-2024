import React from "react";
import Image from "next/image";

export function CosenseIcon({
  width,
  height,
  ...props
}: {
  width: number;
  height: number;
}) {
  return (
    <Image
      src="/cosense.webp"
      alt="Cosense Logo"
      width={width}
      height={height}
      {...props}
    />
  );
}
