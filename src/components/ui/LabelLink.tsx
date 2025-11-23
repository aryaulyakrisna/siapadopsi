import React from "react";

interface LabelLinkProps {
  children: React.ReactNode;
  isDisabled?: boolean;
  onClick?: () => void;
}

const LabelLink: React.FC<LabelLinkProps> = ({ children, onClick, isDisabled = true }) => {
  return (
    <button
      className={`rounded-full px-4 py-2 bg-(--primary)/10 text-(--primary) shadow-lg w-fit quicksand-semibold hover hover:shadow-xl hover:bg-(--primary)/20 active:scale-[97.5%] transition-all duration-150 ${
        isDisabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default LabelLink;
