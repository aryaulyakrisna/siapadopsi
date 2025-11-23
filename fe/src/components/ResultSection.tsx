import React from "react";
import { FaCheck } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { AiFillWarning } from "react-icons/ai";
import { GoXCircleFill } from "react-icons/go";
import { FaBookOpen } from "react-icons/fa";
import { IoIosArrowRoundForward, IoIosTrendingUp } from "react-icons/io";
import { LuRefreshCcw } from "react-icons/lu";
import Footer from "./ui/Footer";
import LabelLink from "./ui/LabelLink";
import { IoChevronBack } from "react-icons/io5";
import H2 from "./ui/H2";
import H1 from "./ui/H1";
import H3 from "./ui/H3";
import Button from "./ui/Button";
import Button2 from "./ui/Button2";

interface ResultSectionProps {
  score: number;
  maxScore: number;
  onRestart: () => void;
  onBack: () => void;
  showResult: boolean;
}

interface ResultCategory {
  title: string;
  icon: React.ReactNode;
  message: string;
  description: string;
  color: string;
  bgGradient: string;
  recommendations: string[];
  nextSteps: string[];
  imageQuery: string;
}

const getResultCategory = (percentage: number): ResultCategory => {
  if (percentage >= 80) {
    return {
      title: "Sangat Siap! 🎉",
      icon: <FaCheck />,
      message: "Anda sudah sangat siap untuk mengadopsi kucing!",
      description:
        "Hasil tes menunjukkan bahwa Anda memiliki pemahaman yang baik tentang tanggung jawab memelihara kucing dan sudah mempersiapkan segala kebutuhannya. Anda siap memberikan rumah yang penuh kasih untuk kucing kesayangan.",
      color: "text-green-400",
      bgGradient: "from-green-50 to-green-100",
      recommendations: [
        "Hubungi shelter atau rescue terdekat untuk memulai proses adopsi",
        "Siapkan perlengkapan dasar: litter box, tempat makan/minum, mainan",
        "Jadwalkan kunjungan ke dokter hewan untuk check-up pertama",
        "Siapkan ruang khusus yang aman dan nyaman untuk kucing baru",
      ],
      nextSteps: [
        "Cari shelter atau rescue yang terpercaya di area Anda",
        "Isi formulir adopsi dan siapkan dokumen yang diperlukan",
        "Ikuti proses interview dan home visit dari shelter",
        "Sambut anggota keluarga baru Anda dengan penuh cinta!",
      ],
      imageQuery: "happy cat home",
    };
  } else if (percentage >= 60) {
    return {
      title: "Siap dengan Persiapan 👍",
      icon: <FaHeart />,
      message: "Anda hampir siap, namun perlu beberapa persiapan tambahan",
      description:
        "Anda memiliki niat baik dan pemahaman dasar tentang merawat kucing. Dengan sedikit persiapan dan pembelajaran tambahan, Anda akan siap untuk menjadi cat parent yang bertanggung jawab.",
      color: "text-blue-400",
      bgGradient: "from-blue-50 to-blue-100",
      recommendations: [
        "Pelajari lebih dalam tentang perawatan kucing dari sumber terpercaya",
        "Konsultasi dengan dokter hewan tentang biaya dan komitmen perawatan",
        "Evaluasi ulang budget bulanan untuk memastikan kecukupan dana",
        "Diskusikan dengan keluarga tentang pembagian tanggung jawab",
      ],
      nextSteps: [
        "Ikuti kelas atau workshop tentang perawatan kucing",
        "Bergabung dengan komunitas pecinta kucing untuk belajar dari pengalaman mereka",
        "Siapkan dana darurat khusus untuk kebutuhan medis kucing",
        "Pertimbangkan untuk menjadi foster parent terlebih dahulu untuk pengalaman",
      ],
      imageQuery: "person learning cat care",
    };
  } else if (percentage >= 40) {
    return {
      title: "Perlu Persiapan Lebih ⚠️",
      icon: <AiFillWarning />,
      message: "Anda membutuhkan persiapan yang lebih matang",
      description:
        "Ada beberapa aspek penting yang perlu Anda persiapkan sebelum mengadopsi kucing. Jangan berkecil hati! Dengan persiapan yang tepat, Anda bisa menjadi cat parent yang hebat.",
      color: "text-orange-400",
      bgGradient: "from-orange-50 to-orange-100",
      recommendations: [
        "Pelajari secara mendalam tentang kebutuhan dasar kucing",
        "Evaluasi kondisi finansial dan pastikan memiliki buffer untuk kebutuhan darurat",
        "Pertimbangkan apakah lingkungan tempat tinggal Anda sudah aman untuk kucing",
        "Pastikan Anda memiliki waktu yang cukup untuk merawat kucing setiap hari",
      ],
      nextSteps: [
        "Baca buku atau artikel tentang cat care dari sumber terpercaya",
        "Kunjungi shelter untuk belajar lebih banyak tentang kucing",
        "Bicarakan dengan cat owner berpengalaman tentang realita memelihara kucing",
        "Buat perencanaan finansial untuk memastikan kesiapan budget",
        "Persiapkan diri secara mental dan fisik untuk komitmen jangka panjang",
      ],
      imageQuery: "cat care preparation",
    };
  } else {
    return {
      title: "Belum Siap 💭",
      icon: <GoXCircleFill />,
      message: "Sebaiknya tunda dulu rencana adopsi Anda",
      description:
        "Hasil tes menunjukkan bahwa Anda belum siap untuk mengadopsi kucing saat ini. Ini bukan berarti Anda tidak bisa menjadi cat parent yang baik, namun Anda perlu persiapan yang lebih matang terlebih dahulu.",
      color: "text-red-400",
      bgGradient: "from-red-50 to-red-100",
      recommendations: [
        "Evaluasi kembali motivasi Anda untuk mengadopsi kucing",
        "Pertimbangkan apakah kondisi hidup Anda saat ini stabil untuk merawat hewan peliharaan",
        "Pelajari lebih banyak tentang tanggung jawab dan komitmen jangka panjang",
        "Pastikan kondisi finansial Anda memadai untuk kebutuhan kucing",
      ],
      nextSteps: [
        "Fokus pada stabilitas kondisi hidup Anda terlebih dahulu",
        "Pelajari tentang kucing dan kebutuhan mereka dari berbagai sumber",
        "Pertimbangkan untuk menjadi volunteer di shelter untuk mendapat pengalaman",
        "Buat perencanaan jangka panjang tentang kesiapan Anda",
        "Lakukan tes ini lagi setelah kondisi Anda lebih stabil",
      ],
      imageQuery: "thinking about pets",
    };
  }
};
const Result: React.FC<ResultSectionProps> = ({
  score,
  maxScore,
  onRestart,
  onBack,
  showResult,
}) => {
  const percentage = Math.round((score / maxScore) * 100);
  const result = getResultCategory(percentage);

  return (
    <section
      className={`fixed inset-0 overflow-y-auto transition-all duration-900 z-1001 bg-linear-to-br from-[#FFF8F0] via-[#FFE5D9] to-[#FFD4B8] pt-10 ${
        !showResult && "pointer-events-none opacity-0 translate-y-[50%]"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 min-h-screen">
        <div className="text-center mb-8 flex flex-col gap-4 items-center">
          <LabelLink onClick={onBack}>
            <div className="flex gap-2 items-center">
              <IoChevronBack />
              <p>Kembali ke Halaman Utama</p>
            </div>
          </LabelLink>
          <H1 text="Hasil Tes Kelayakan Adopsi" />
          <p className="text-muted-foreground">
            Berikut adalah evaluasi kesiapan Anda untuk mengadopsi kucing
          </p>
        </div>

        {/* Score Card */}
        <div
          className={`p-8 md:p-10 rounded-4xl border-2 border-(--primary) bg-linear-to-br ${result.bgGradient} mb-8 shadow-xl`}
        >
          <div className="text-center mb-8 flex flex-col gap-4">
            <H2 text={result.title} />
            <div className="text-5xl md:text-4xl">{percentage}%</div>
            <p className="text-muted-foreground">
              Skor: {score} dari {maxScore} poin
            </p>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            <p className={`text-xl text-center ${result.color}`}>
              {result.message}
            </p>
            <p className="text-center text-muted-foreground">
              {result.description}
            </p>
          </div>
        </div>

        {/* Recommendations */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-8 rounded-4xl border-2 border-(--primary) shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-(--primary)/10 p-4 rounded-2xl text-(--primary)">
                <FaBookOpen size={24} />
              </div>
              <H3 text="Rekomendasi untuk Anda" />
            </div>
            <ul className="space-y-4 p-2">
              {result.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full bg-(--primary)/10 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-(--primary)"></div>
                  </div>
                  <span className="text-sm text-muted-foreground">{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-4xl border-2 border-(--primary) shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-(--primary)/10 p-4 rounded-2xl text-(--primary)">
                <IoIosTrendingUp size={24} />
              </div>
              <H3 text="Langkah Selanjutnya" />
            </div>
            <ul className="space-y-4 p-2">
              {result.nextSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full bg-(--primary) flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white text-xs">{index + 1}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button2 onClick={onRestart}>
            <div className="flex gap-2 items-center w-fit">
              <LuRefreshCcw />
              <p>Ulangi Tes</p>
            </div>
          </Button2>
          <Button onClick={onBack}>
            <div className="flex gap-2 items-center w-fit">
              <p>Kembali ke Beranda</p>
              <IoIosArrowRoundForward />
            </div>
          </Button>
        </div>

        {/* Footer Note */}
        <div className="my-10 text-center">
          <div className="inline-block p-4 rounded-2xl bg-white/80 border-2 border-(--primary)">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Catatan:</strong> Tes ini adalah alat bantu evaluasi
              dan bukan penentu mutlak. Konsultasikan dengan shelter atau dokter
              hewan untuk panduan lebih lanjut.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Result;
