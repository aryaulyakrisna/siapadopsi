import React from "react";
import H3 from "./H3";

interface KomitmenWaktuCardProps {
  icon: React.ReactNode;
  title: string;
  period: string;
  description: string;
}

const KomitmenWaktuCard: React.FC<KomitmenWaktuCardProps> = ({
  icon,
  title,
  period,
  description,
}) => {
  return (
    <div className="border-(--secondary) border-2 bg-white rounded-3xl p-8 flex flex-col items-center gap-8 hover hover:shadow-xl hover:border-(--orange) transition-all duration-300">
      <div className="flex items-center justify-center rounded-full p-4 text-(--orange) bg-(--secondary)">
        {icon}
      </div>
      <div className="bg-(--primary) rounded-full px-4 py-2 text-white w-full text-center">
        <p>{period}</p>
      </div>
      <div className="text-(--title) text-center">
        <H3 text={title} />
      </div>
      <div className="text-(--text) text-center">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default KomitmenWaktuCard;
