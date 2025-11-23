import React from "react";
import H3 from "./H3";

interface PersiapanCardProps {
  icon: React.ReactNode;
  iconColor?: "--orange" | "--yellow" | "--cream" | "--brown" | string;
  title: string;
  pricing: string;
  description: string;
}

const KesiapanFinancialCard: React.FC<PersiapanCardProps> = ({
  icon,
  iconColor = "--orange",
  title,
  pricing,
  description,
}) => {
  return (
    <div className="border-(--secondary) border-2 bg-white rounded-3xl p-8  flex gap-4 hover hover:shadow-xl hover:border-(--secondary) transition-all duration-150">
      <div
        className={`flex items-center justify-center rounded-2xl p-4 text-white shadow-lg h-fit w-fit ${
          iconColor === "--orange"
            ? "bg-(--orange)"
            : iconColor === "--yellow"
            ? "bg-(--yellow)"
            : iconColor === "--cream"
            ? "bg-(--cream)"
            : "bg-(--brown)"
        }`}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-(--title)">
          <H3 text={title} />
        </div>
        <div className="px-4 py-2 text-(--primary) rounded-full bg-(--primary)/20  w-fit">
          <p>{pricing}</p>
        </div>
        <div className="text-(--text)">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default KesiapanFinancialCard;
