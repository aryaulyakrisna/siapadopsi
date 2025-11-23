import React from "react";

interface H3Props {
  text: string;
}

const H3: React.FC<H3Props> = ({ text }) => {
  return <h3 className="quicksand-semibold ">{text}</h3>;
};

export default H3;
