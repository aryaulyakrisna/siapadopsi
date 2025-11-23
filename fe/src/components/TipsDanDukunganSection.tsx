import React from "react";
import PrimarySectionLabel from "./ui/PrimarySectionLabel";
import H2 from "./ui/H2";
import { FaShieldCat } from "react-icons/fa6";
import { RiHealthBookFill } from "react-icons/ri";
import TipsDanDukunganCard from "./ui/TipsDanDukunganCard";

const dukunganItems = [
  {
    icon: <FaShieldCat size={24} />,
    iconColor: "--orange",
    title: "Lembaga Adopsi Terpercaya",
    description:
      "Setiap tahun jumlah kucing terlantar terus meningkat. Shelter menjadi tempat terakhir bagi mereka untuk tinggal. Karena itu, adopsi jauh lebih baik, selain menyelamatkan kucing terlantar, kucing dari shelter biasanya sudah disteril dan divaksin sehingga kesehatannya lebih terjamin. Setiap shelter punya syarat adopsi berbeda, namun umumnya meliputi pengisian formulir, interview singkat, home visit, dan biaya adopsi untuk mendukung operasional shelter.",
  },
  {
    icon: <RiHealthBookFill size={24} />,
    iconColor: "--cream",
    title: "Asuransi Kesehatan",
    description:
      "Tahukah kalian, sekarang ada asuransi kesehatan khusus untuk kucing? Asuransi ini membantu meringankan biaya jika kucing tiba-tiba sakit atau mengalami kecelakaan. Dengan asuransi, kalian bisa lebih tenang karena sebagian biaya perawatan ditanggung. Biaya premi biasanya terjangkau, mulai dari 100 ribu per tahun, tergantung cakupan yang dipilih.",
  },
];

const TipsDanDukunganSection: React.FC = () => {
  return (
    <section id="tips_and_dukungan" className="py-20 px-4 md:px-8 bg-linear-to-br from-[#FFE5D9] to-[#FFF8F0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 flex flex-col gap-4 items-center">
          <PrimarySectionLabel text="❤️  Dukungan Luar & Tips" />
          <H2 text="Dukungan Luar yang Tersedia" />
          <p className="text-muted-foreground max-w-2xl ">
            Apakah Anda tahu ada banyak dukungan diluar sana yang bisa membantu
            Anda memastikan kucing yang Anda adopsi sehat dan terjamin
            kehidupannya
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-5xl mx-auto items-center">
          {dukunganItems.map((item, index) => (
            <TipsDanDukunganCard
              key={index}
              icon={item.icon}
              iconColor={item.iconColor}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsDanDukunganSection;
