import React from "react";
import PrimarySectionLabel from "./ui/PrimarySectionLabel";
import H2 from "./ui/H2";
import ListOfPengetahuan from "./ui/ListOfPengetahuan";

const knowledgeItems = [
  "Memahami bahasa tubuh dan perilaku kucing",
  "Mengenali tanda-tanda kucing sakit atau stress",
  "Mengetahui jadwal vaksinasi yang tepat",
  "Cara memberikan makanan yang sehat dan bergizi",
  "Teknik grooming dan perawatan bulu yang benar",
  "Cara melatih kucing menggunakan litter box",
  "Menangani perilaku agresif atau destruktif",
  "Pentingnya sterilisasi untuk kesehatan kucing",
];

const PengetahuanSection: React.FC = () => {
  return (
    <section id="pengetahuan" className="py-20 px-4 md:px-8 bg-linear-to-br from-[#FFD4B8] to-[#FFE5D9]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 flex flex-col gap-4 items-center">
          <PrimarySectionLabel text="📚 Edukasi & Pengetahuan" />
          <H2 text="Pengetahuan Perawatan" />
          <p className="text-muted-foreground max-w-2xl ">
            Pengetahuan yang tepat akan membantu Anda memberikan perawatan
            terbaik untuk kucing kesayangan
          </p>
        </div>

        <ListOfPengetahuan
          pengetahuanItems={knowledgeItems}
          tips="💡 Tips: Jangan ragu untuk berkonsultasi dengan
              dokter hewan atau bergabung dengan komunitas pecinta kucing untuk
              terus belajar!"
        />
      </div>
    </section>
  );
};

export default PengetahuanSection;
