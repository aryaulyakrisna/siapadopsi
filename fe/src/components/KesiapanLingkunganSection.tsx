import React from "react";
import { GoShieldCheck } from "react-icons/go";
import { AiTwotoneHome } from "react-icons/ai";
import { LuUsersRound } from "react-icons/lu";
import PrimarySectionLabel from "./ui/PrimarySectionLabel";
import H2 from "./ui/H2";
import KesiapanLingkunganCard from "./ui/KesiapanLingkunganCard";

const lingkunganItems = [
  {
    icon: <GoShieldCheck size={24} />,
    title: "Keamanan Rumah",
    description:
      "Pastikan rumah aman dari bahaya seperti kabel listrik terbuka, tanaman beracun, dan benda berbahaya lainnya.",
    iconColor: "--orange",
  },
  {
    icon: <AiTwotoneHome size={24} />,
    title: "Ruang Gerak",
    description:
      "Kucing membutuhkan ruang untuk bermain, istirahat, dan menjelajah. Sediakan area khusus yang nyaman.",
    iconColor: "--yellow",
  },
  {
    icon: <LuUsersRound size={24} />,
    title: "Kesesuaian Penghuni",
    description:
      "Diskusikan dengan seluruh anggota keluarga. Pastikan tidak ada yang alergi atau keberatan dengan kehadiran kucing.",
    iconColor: "--cream",
  },
];

const KesiapanLingkunganSection: React.FC = () => {
  return (
    <section id="kesiapan_lingkungan" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 flex flex-col items-center gap-4">
          <PrimarySectionLabel text="🏡 Persiapan Lingkungan" />
          <H2 text="Kesiapan Lingkungan" />
          <p className="text-muted-foreground max-w-2xl ">
            Lingkungan yang aman dan nyaman adalah fondasi utama untuk
            kebahagiaan kucing Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {lingkunganItems.map((item, index) => (
            <KesiapanLingkunganCard
              icon={item.icon}
              iconColor={
                item.iconColor as
                  | "--orange"
                  | "--yellow"
                  | "--cream"
                  | "--brown"
              }
              title={item.title}
              description={item.description}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KesiapanLingkunganSection;
