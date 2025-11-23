import React from "react";

interface H4Props {
  text: string;
}

const H4: React.FC<H4Props> = ({ text }) => {
  return (
    <h2 className="quicksand-semibold text-xl md:text-3xl">
      {text}
    </h2>
  );
};

export default H4;
