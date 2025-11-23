import React from "react";
import H3 from "./H3";

interface KesiapanLingkunganCardProps {
  icon: React.ReactNode;
  iconColor?: "--orange" | "--yellow" | "--cream" | "--brown";
  title: string;
  description: string;
}

const KesiapanLingkunganCard: React.FC<KesiapanLingkunganCardProps> = ({
  icon,
  iconColor = "--orange",
  title,
  description,
}) => {
  return (
    <div className="border-(--secondary) border-2 bg-white rounded-3xl p-8 flex flex-col gap-8 hover hover:shadow-xl hover:border-(--orange) hover:-translate-y-4 transition-all duration-150">
      <div
        className={`flex items-center justify-center rounded-2xl p-4 text-white shadow-lg w-fit ${
          iconColor === "--orange"
            ? "bg-(--orange)"
            : iconColor === "--yellow"
            ? "bg-(--yellow)"
            : "bg-(--cream)"
        }`}
      >
        {icon}
      </div>
      <div className="text-(--title)">
        <H3 text={title} />
      </div>
      <div className="text-(--text)">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default KesiapanLingkunganCard;
