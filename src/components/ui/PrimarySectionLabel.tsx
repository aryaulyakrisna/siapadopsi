import React from "react";

interface SectionLabelProps {
  text: string;
  type?: "regular" | "bordered";
}

const SectionLabel: React.FC<SectionLabelProps> = ({
  text,
  type = "regular",
}) => {
  return (
    <div
      className={`w-fit bg-(--primary)/15 px-4 py-2 rounded-full ${
        type == "bordered" ? "border-2 border-(--primary)/20" : ""
      }`}
    >
      <p className="text-(--primary) ">{text}</p>
    </div>
  );
};

export default SectionLabel;
