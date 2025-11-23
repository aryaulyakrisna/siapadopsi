import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

interface ListOfPengetahuanProps {
  pengetahuanItems: string[];
  tips: string;
}

const ListOfPengetahuan: React.FC<ListOfPengetahuanProps> = ({
  pengetahuanItems,
  tips,
}) => {
  return (
    <div className="p-8 mx-auto border-2 border-(--secondary) bg-white rounded-3xl shadow-xl max-w-4xl ">
      <div className="gap-4 grid grid-cols-2 max-sm:grid-cols-1 text-white">
        {pengetahuanItems
          ? pengetahuanItems.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-2xl hover hover:bg-(--secondary)/20 transition-all duration-150"
              >
                <FaRegCircleCheck color="#ff8c42"/>
                <p className="text-(--text) ">{item}</p>
              </div>
            ))
          : null}
      </div>
      <div className="border border-(--tertiary) rounded-2xl text-center w-full p-4 bg-(--quaternary) text-(--text) mt-10">
        <p>{tips}</p>
      </div>
    </div>
  );
};

export default ListOfPengetahuan;
