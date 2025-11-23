import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  isDisabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, isDisabled = false }) => {
  return (
    <button
      className={`border-(--primary)  border-2 rounded-full px-4 py-2 bg-white text-(--primary) shadow-lg quicksand-semibold hover hover:shadow-xl hover:text-white hover:bg-(--primary) active:scale-[97.5%] transition-all duration-150 ${
        isDisabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
