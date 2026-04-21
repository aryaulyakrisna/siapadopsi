import React from "react";

export interface LinkToSourceProps {
  imgSrc: string;
  title: string;
  href: string;
}

const LinkToSource: React.FC<LinkToSourceProps> = ({ imgSrc, title, href }) => {
  return (
    <a
      href={href}
      className="px-2 py-1 quicksand-semibold underline flex rounded-full space-x-2 border text-xs border-(--primary) items-center justify-center bg-(--secondary)/50 hover:text-(--primary) hover hover:shadow-sm transition-all duration-150"
    >
      <div className="w-6 h-6 rounded-full flex items-center justify-center overflow-hidden">
        <img src={imgSrc} alt="link-img" />
      </div>
      <p className="max-w-[100px] truncate">{title}</p>
    </a>
  );
};

export default LinkToSource;
