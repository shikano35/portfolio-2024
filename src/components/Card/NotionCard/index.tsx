import React from "react";

export interface NotionCardProps {
  icon?: string;
  title?: string;
  description?: string;
}

const NotionCard = ({ icon, title, description }: NotionCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg">
      <div className="text-2xl mb-2">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default NotionCard;
