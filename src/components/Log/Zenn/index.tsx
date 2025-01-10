import React from "react";
import { ZennCard } from "@/components/Card/ZennCard";

export function Zenn() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="flex flex-col gap-2">
        <ZennCard />
      </div>
    </div>
  );
}
