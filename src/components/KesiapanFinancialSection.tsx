import React from "react";
import KesiapanFinancialCard from "./ui/KesiapanFinancialCard";
import PrimarySectionLabel from "./ui/PrimarySectionLabel";
import H2 from "./ui/H2";
import { HiMiniScissors } from "react-icons/hi2";
import { LuDollarSign } from "react-icons/lu";
import { TbVaccine } from "react-icons/tb";
import { AiFillWarning } from "react-icons/ai";
import H3 from "./ui/H3";

const financialItems = [
  {
    icon: <LuDollarSign size={24} />,
    iconColor: "--orange",
    title: "Makanan & Kebutuhan",
    pricing: "Rp 300.000 - 500.000 / bulan",
    description: "Makanan berkualitas, pasir kucing, dan mainan",
  },
  {
    icon: <TbVaccine size={24} />,
    iconColor: "--yellow",
    title: "Vaksinasi & Kesehatan",
    pricing: "Rp 200.000 - 400.000 / bulan",
    description: "Vaksin tahunan, vitamin, dan obat rutin",
  },
  {
    icon: <HiMiniScissors size={24} />,
    iconColor: "--cream",
    title: "Grooming",
    pricing: "Rp 100.000 - 300.000 / bulan",
    description: "Potong kuku, mandi, dan perawatan bulu",
  },
  {
    icon: <AiFillWarning size={24} />,
    iconColor: "--brown",
    title: "Dana Darurat",
    pricing: "Rp 500.000 - 1.000.000 / bulan",
    description: "Untuk keadaan medis darurat",
  },
];

const KesiapanFinancialSection: React.FC = () => {
  return (
    <section id="kesiapan_finansial" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 flex flex-col gap-4 items-center text-center">
          <PrimarySectionLabel text="💰 Biaya & Investasi" />
          <H2 text="Kesiapan Financial" />
          <p className="text-muted-foreground max-w-2xl ">
            Memelihara kucing membutuhkan biaya rutin dan dana darurat untuk
            kesehatan mereka
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {financialItems.map((item, index) => (
            <KesiapanFinancialCard
              key={index}
              icon={item.icon}
              iconColor={item.iconColor}
              title={item.title}
              pricing={item.pricing}
              description={item.description}
            />
          ))}
        </div>

        <div className="mt-10 max-w-3xl mx-auto bg-linear-to-r from-(--primary)/10 to-accent/30 p-8 rounded-3xl border-2 border-(--primary)/20">
          <div className="text-center flex flex-col gap-4">
            <H3 text="Estimasi Total Biaya Bulanan" />
            <div className="text-2xl md:text-4xl text-(--primary)">
              Rp 1.100.000 - 2.200.000
            </div>
            <p className="text-muted-foreground ">
              *Biaya dapat bervariasi tergantung kondisi dan kebutuhan kucing
              Anda
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KesiapanFinancialSection;
