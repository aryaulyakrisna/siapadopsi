import React from "react";
import { HiClock } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import H2 from "./ui/H2";
import KomitmenWaktuCard from "./ui/KomitmenWaktuCard";
import PrimarySectionLabel from "./ui/PrimarySectionLabel";

const komitmenWaktuItems = [
  {
    icon: <HiClock size={24} />,
    title: "Bermain & Interaksi",
    period: "1-2 jam per hari",
    description:
      "Kucing membutuhkan waktu bermain untuk kesehatan fisik dan mental",
  },
  {
    icon: <FaHeart size={24} />,
    title: "Perawatan Harian",
    period: "30-60 menit per hari",
    description: "Membersihkan litter box, memberi makan, dan grooming rutin",
  },
  {
    icon: <FaCalendarAlt size={24} />,
    title: "Komitmen Jangka Panjang",
    period: "15-20 tahun",
    description: "Kucing bisa hidup hingga 20 tahun, siapkah Anda berkomitmen?",
  },
];

const KomitmenWaktuSection: React.FC = () => {
  return (
    <section id="komitmen_waktu" className="py-20 px-4 md:px-8 bg-linear-to-br from-[#FFE5D9] to-[#FFF8F0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 flex flex-col gap-4 items-center">
          <PrimarySectionLabel text="⏰ Waktu & Perhatian" />
          <H2 text="Komitmen Waktu" />
          <p className="text-muted-foreground max-w-2xl ">
            Kucing bukan hanya pet, tapi anggota keluarga yang membutuhkan waktu
            dan perhatian Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {komitmenWaktuItems.map((item, index) => (
            <KomitmenWaktuCard
              icon={item.icon}
              title={item.title}
              period={item.period}
              description={item.description}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KomitmenWaktuSection;
