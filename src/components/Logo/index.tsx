import React from "react";
import Image from "next/image";
import ImageProps from "next/image";

export function Logo({
  src = "/my-icon.webp",
  alt = "My Logo",
  className,
  ...props
}: Partial<ImageProps>) {
  return <Image src={src} alt={alt} className={className} {...props} />;
}
