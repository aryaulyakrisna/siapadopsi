import React from "react";

interface H2Props {
  text: string;
}

const H2: React.FC<H2Props> = ({ text }) => {
  return (
    <h2 className="quicksand-semibold text-3xl md:text-5xl">
      {text}
    </h2>
  );
};

export default H2;
