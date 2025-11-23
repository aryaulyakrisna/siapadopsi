import React from "react";
import { FaHeart } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import H3 from "./H3";

interface ListOfAlasanProps {
  type: "bad" | "good";
  title: string;
  alasanItems: string[];
}

const ListOfAlasan: React.FC<ListOfAlasanProps> = ({
  type,
  title,
  alasanItems,
}) => {
  if (type === "good") {
    return (
      <div className="p-8 border-2 bg-green-50 border-green-500 rounded-3xl shadow-xl">
        <div className="flex gap-4 text-green-900 mb-10 items-center">
          <div className="rounded-full bg-green-500 text-white p-4 ">
            <FaHeart size={24} />
          </div>
          <div>
            <H3 text={title} />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {alasanItems.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white border border-green-500 flex gap-4"
            >
              <div className="rounded-full bg-green-100 text-500 h-4 w-4 flex items-center justify-center text-green-500">
                <GoDotFill size={10} />
              </div>
              <div>
                <p>{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="p-8 border-2 border-red-500 bg-red-50 rounded-3xl shadow-xl">
        <div className="flex gap-4 text-red-900 mb-10 items-center">
          <div className="rounded-full bg-red-500 text-white p-4">
            <ImCross size={24} />
          </div>
          <div>
            <H3 text={title} />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {alasanItems.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white border border-red-500 flex gap-4"
            >
              <div className="rounded-full bg-red-100 text-500 h-4 w-4 flex items-center justify-center text-red-500">
                <RxCross2 size={10} />
              </div>
              <div>
                <p>{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default ListOfAlasan;
