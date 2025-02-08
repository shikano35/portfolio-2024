import React from "react";
import { getWorks } from "@/lib/microcms";
import PersonalProjectCard from "@/components/Card/PersonalProjectCard";

export async function WorkProjects() {
  const works = await getWorks();

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {works.map((work) => (
        <PersonalProjectCard
          key={work.id}
          imageSrc={work.thumbnail.url}
          title={work.title}
          description={work.description}
          devType={work.devType.join(", ")}
          status={work.status.join(", ")}
          duration={work.duration}
          skills={work.skills}
        />
      ))}
    </div>
  );
}

export async function PersonalProjects() {
  const works = await getWorks();

  return (
    <div className="grid grid-cols-1 gap-8 md:gap-y-16 md:grid-cols-2">
      {works.map((work) => (
        <PersonalProjectCard
          key={work.id}
          imageSrc={work.thumbnail.url}
          title={work.title}
          description={work.description}
          devType={work.devType.join(", ")}
          status={work.status.join(", ")}
          duration={work.duration}
          skills={work.skills}
        />
      ))}
    </div>
  );
}
