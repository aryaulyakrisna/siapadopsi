import React from "react";
import H3 from "./H3";

interface TipsDanDukunganCardProps {
  icon: React.ReactNode;
  iconColor?: "--orange" | "--yellow" | "--cream" | "--brown" | string;
  title: string;
  description: string;
}

const TipsDanDukunganCard: React.FC<TipsDanDukunganCardProps> = ({
  icon,
  iconColor = "--orange",
  title,
  description,
}) => {
  return (
    <div className="border-(--primary) border-2 bg-white rounded-3xl p-8 flex gap-4 max-w-4xl">
      <div
        className={`flex items-center justify-center rounded-2xl p-4 text-white shadow-lg h-fit w-fit max-sm:hidden ${
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
        <div className="text-(--text)">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TipsDanDukunganCard;
