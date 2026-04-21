import React from "react";

interface ArticleCardProps {
  imgSrc: string;
  title: string;
  author: string;
  date: string; // contoh "2025-12-01"
}

const ArticleCard: React.FC<ArticleCardProps> = ({ imgSrc, title, author, date }) => {
  const formattedDate = new Date(date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex flex-col w-full min-w-[280px] max-w-xs bg-white rounded-xl overflow-hidden transition-all duration-150 border-2 border-(--tertiary) hover:scale-[97.5%] active:scale-95">
      <div className="w-full h-50 overflow-hidden">
        <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="p-4">
        <h3 className="quicksand-semibold truncate">{title}</h3>
        <p className="text-sm pt-1">{author}</p>
        <div className="flex justify-end pt-4">
          <p className="text-sm text-end px-2 py-0.5 rounded-full bg-(--tertiary) text-(--primary) w-fit">
            {formattedDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
