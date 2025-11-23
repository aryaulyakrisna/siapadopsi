import React from "react";
import PrimarySectionLabel from "./ui/PrimarySectionLabel";
import H2 from "./ui/H2";
import ListOfAlasan from "./ui/ListOfAlasan";

const goodReasons = [
  "Ingin memberikan rumah yang penuh kasih untuk kucing yang membutuhkan",
  "Siap berkomitmen jangka panjang untuk perawatan kucing",
  "Memiliki waktu dan sumber daya finansial yang cukup",
  "Ingin memiliki teman setia dan mengurangi stress",
];

const badReasons = [
  "Hanya karena kucing terlihat lucu atau mengikuti tren",
  "Sebagai hadiah untuk anak tanpa pertimbangan matang",
  "Tidak siap dengan tanggung jawab jangka panjang",
  "Hanya untuk estetika media sosial",
];

const AlasanSection: React.FC = () => {
  return (
    <section id="alasan" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 flex flex-col gap-4 items-center">
          <PrimarySectionLabel text="💭 Motivasi & Alasan" />
          <H2 text="Alasan Mengadopsi" />
          <p className="text-muted-foreground max-w-2xl ">
            Pastikan motivasi Anda tepat sebelum membuat keputusan mengadopsi
            kucing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Good Reasons */}
          <ListOfAlasan
            type="good"
            title="Alasan yang baik"
            alasanItems={goodReasons}
          />

          {/* Bad Reasons */}
          <ListOfAlasan
            type="bad"
            title="Hindari Alasan Ini"
            alasanItems={badReasons}
          />
        </div>
      </div>
    </section>
  );
};

export default AlasanSection;
