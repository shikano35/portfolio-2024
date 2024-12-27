import Image from "next/image";
import React, { ComponentPropsWithoutRef } from "react";

export function Logo({
  src = "/my-icon.webp",
  alt = "My Logo",
  className,
  ...props
}: Omit<ComponentPropsWithoutRef<typeof Image>, "src"> & { src?: string } & {
  alt?: string;
}) {
  return <Image src={src} alt={alt} className={className} {...props} />;
}
