import { useEffect, useState } from "react";
import Button from "./ui/Button";
import Button2 from "./ui/Button2";
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import PrimarySectionLabel from "./ui/PrimarySectionLabel";
import LabelLink from "./ui/LabelLink";
import H4 from "./ui/H4";
import H2 from "./ui/H2";
import Footer from "./ui/Footer";

interface Question {
  id: number;
  category: string;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    category: "Lingkungan Rumah",
    question: "Bagaimana kondisi tempat tinggal Anda?",
    options: [
      { text: "Rumah dengan halaman luas", score: 10 },
      { text: "Apartemen/rumah dengan ruang cukup", score: 8 },
      { text: "Kamar kos/kontrakan", score: 5 },
      { text: "Tempat tinggal tidak tetap", score: 0 },
    ],
  },
  {
    id: 2,
    category: "Lingkungan Rumah",
    question:
      "Apakah Anda diizinkan memelihara hewan peliharaan di tempat tinggal?",
    options: [
      { text: "Ya, diizinkan tanpa batasan", score: 10 },
      { text: "Ya, dengan izin pemilik/pengelola", score: 7 },
      { text: "Tidak yakin, belum menanyakan", score: 3 },
      { text: "Tidak diizinkan", score: 0 },
    ],
  },
  {
    id: 3,
    category: "Komitmen Waktu",
    question:
      "Berapa banyak waktu yang bisa Anda luangkan untuk kucing setiap hari?",
    options: [
      { text: "Lebih dari 3 jam", score: 10 },
      { text: "2-3 jam", score: 8 },
      { text: "1-2 jam", score: 5 },
      { text: "Kurang dari 1 jam", score: 2 },
    ],
  },
  {
    id: 4,
    category: "Komitmen Waktu",
    question: "Apakah Anda sering bepergian atau dinas luar kota?",
    options: [
      { text: "Jarang (1-2x setahun)", score: 10 },
      { text: "Kadang-kadang (3-6x setahun)", score: 7 },
      { text: "Sering (lebih dari 6x setahun)", score: 3 },
      { text: "Sangat sering (lebih dari 12x setahun)", score: 0 },
    ],
  },
  {
    id: 5,
    category: "Kesiapan Finansial",
    question: "Apakah Anda memiliki dana darurat untuk kebutuhan medis kucing?",
    options: [
      { text: "Ya, sudah menyiapkan dana khusus", score: 10 },
      { text: "Belum, tapi memiliki tabungan yang cukup", score: 7 },
      { text: "Tidak ada tabungan khusus", score: 3 },
      { text: "Kesulitan finansial saat ini", score: 0 },
    ],
  },
  {
    id: 6,
    category: "Kesiapan Finansial",
    question:
      "Berapa budget bulanan yang bisa Anda alokasikan untuk kebutuhan kucing?",
    options: [
      { text: "Lebih dari Rp 1.000.000", score: 10 },
      { text: "Rp 500.000 - Rp 1.000.000", score: 8 },
      { text: "Rp 200.000 - Rp 500.000", score: 5 },
      { text: "Kurang dari Rp 200.000", score: 2 },
    ],
  },
  {
    id: 7,
    category: "Pengetahuan Perawatan",
    question: "Seberapa familiar Anda dengan perawatan dasar kucing?",
    options: [
      { text: "Sangat familiar, pernah memelihara kucing", score: 10 },
      { text: "Cukup tahu dari membaca/belajar", score: 7 },
      { text: "Sedikit tahu", score: 4 },
      { text: "Tidak tahu sama sekali", score: 0 },
    ],
  },
  {
    id: 8,
    category: "Pengetahuan Perawatan",
    question: "Apakah Anda tahu cara menangani kucing yang sakit?",
    options: [
      { text: "Ya, dan tahu kapan harus ke dokter hewan", score: 10 },
      { text: "Tahu dasar-dasarnya", score: 7 },
      { text: "Tidak tahu tapi mau belajar", score: 5 },
      { text: "Tidak tahu", score: 0 },
    ],
  },
  {
    id: 9,
    category: "Motivasi & Komitmen",
    question: "Apa motivasi utama Anda mengadopsi kucing?",
    options: [
      {
        text: "Ingin menyelamatkan kucing & berkomitmen jangka panjang",
        score: 10,
      },
      { text: "Ingin memiliki teman dan siap merawatnya", score: 8 },
      { text: "Ingin mencoba memelihara kucing", score: 3 },
      { text: "Hanya karena lucu/tren", score: 0 },
    ],
  },
  {
    id: 10,
    category: "Motivasi & Komitmen",
    question:
      "Apakah seluruh anggota keluarga/rumah setuju dengan kehadiran kucing?",
    options: [
      { text: "Ya, semua setuju dan mendukung", score: 10 },
      { text: "Sebagian besar setuju", score: 7 },
      { text: "Hanya saya yang ingin", score: 3 },
      { text: "Ada yang keberatan/alergi", score: 0 },
    ],
  },
  {
    id: 11,
    category: "Rencana Jangka Panjang",
    question: "Apa rencana Anda jika harus pindah rumah/kota?",
    options: [
      { text: "Kucing akan tetap dibawa dan dirawat", score: 10 },
      { text: "Akan mencari solusi terbaik untuk kucing", score: 7 },
      { text: "Belum memikirkan hal tersebut", score: 3 },
      { text: "Mungkin akan dititipkan/diberikan", score: 0 },
    ],
  },
  {
    id: 12,
    category: "Rencana Jangka Panjang",
    question: "Apakah Anda siap merawat kucing hingga 15-20 tahun ke depan?",
    options: [
      { text: "Ya, sangat siap berkomitmen jangka panjang", score: 10 },
      { text: "Ya, saya akan berusaha semaksimal mungkin", score: 8 },
      { text: "Tidak yakin dengan kondisi 15 tahun ke depan", score: 3 },
      { text: "Tidak bisa berkomitmen sejauh itu", score: 0 },
    ],
  },
];

let maxScore = 0;
questions.forEach((item) => {
  let iMax = 0
  item.options.forEach((i) => {
    if (iMax < i.score) iMax = i.score;
  });
  maxScore += iMax;
});

interface TestSectionProps {
  setScore: ({
    totalScore,
    maxScore,
  }: {
    totalScore: number;
    maxScore: number;
  }) => void;
  showTest: boolean;
  onBack: () => void;
  setShowResult: (showResult: boolean) => void;
}

const TestSection: React.FC<TestSectionProps> = ({
  setScore,
  onBack,
  showTest,
  setShowResult,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(
    new Array(questions.length).fill(-1)
  );
  const [selectedOption, setSelectedOption] = useState<number>(-1);

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isAnswered = answers[currentQuestion] !== -1;

  const handleSelectOption = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] =
      questions[currentQuestion].options[optionIndex].score;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(
        answers[currentQuestion + 1] !== -1
          ? questions[currentQuestion + 1].options.findIndex(
              (opt) => opt.score === answers[currentQuestion + 1]
            )
          : -1
      );
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(
        answers[currentQuestion - 1] !== -1
          ? questions[currentQuestion - 1].options.findIndex(
              (opt) => opt.score === answers[currentQuestion - 1]
            )
          : -1
      );
    }
  };

  const handleSubmit = () => {
    const totalScore = answers.reduce((sum, score) => sum + score, 0);
    setAnswers(new Array(questions.length).fill(-1));
    setCurrentQuestion(0);
    setSelectedOption(-1);
    setScore({ totalScore, maxScore });
    setShowResult(true);
  };

  const allAnswered = answers.every((score) => score !== -1);
  const question = questions[currentQuestion];

  useEffect(() => {
    if (showTest) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showTest]);

  return (
    <section
      className={`fixed inset-0 overflow-y-auto transition-all duration-900 z-1000 bg-linear-to-br from-[#FFF8F0] via-[#FFE5D9] to-[#FFD4B8] pt-10 ${
        !showTest && "pointer-events-none opacity-0 translate-y-[50%]"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 min-h-screen">
        <div className="text-center mb-8 flex flex-col gap-4 items-center">
          <LabelLink onClick={onBack}>
            <div className="flex gap-2 items-center">
              <IoChevronBack />
              <p>Kembali ke Halaman Utama</p>
            </div>
          </LabelLink>
          <H2 text="Tes Kelayakan Adopsi Kucing" />
          <p className="text-muted-foreground max-sm:max-w-70">
            Jawab {questions.length} pertanyaan untuk mengetahui tingkat
            kesiapan Anda
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              Pertanyaan {currentQuestion + 1} dari {questions.length}
            </span>
            <span className="text-sm text-(--primary)">
              {Math.round(progress)}% Selesai
            </span>
          </div>
          <div className="w-full bg-white rounded-full h-3 overflow-hidden border-2 border-(--primary)/20">
            <div
              className="bg-linear-to-r from-(--primary) to-[#FFB347] h-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="p-8 md:p-10 rounded-3xl border-2 border-(--primary) bg-white shadow-xl mb-8">
          <div className="mb-8 flex flex-col gap-4">
            <PrimarySectionLabel text={question.category} />
            <H4 text={question.question} />
          </div>

          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectOption(index)}
                className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 hover ${
                  selectedOption === index
                    ? "border-(--primary) bg-(--primary)/5 shadow-lg scale-[1.02]"
                    : "border-gray-200 hover:border-(--primary)/50 hover:bg-(--primary)/5"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                      selectedOption === index
                        ? "border-(--primary) bg-(--primary)"
                        : "border-gray-300"
                    }`}
                  >
                    {selectedOption === index && <FaCheck color="white" />}
                  </div>
                  <span
                    className={
                      selectedOption === index
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }
                  >
                    {option.text}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center gap-4 mb-10">
          <Button2 onClick={handlePrevious} isDisabled={currentQuestion === 0}>
            <div className="flex gap-2 items-center">
              <IoChevronBack />
              <p>Sebelumnya</p>
            </div>
          </Button2>

          {currentQuestion < questions.length - 1 ? (
            <Button onClick={handleNext} isDisabled={!isAnswered}>
              <div className="flex gap-2 items-center">
                <p>Selanjutnya</p>
                <IoChevronForward />
              </div>
            </Button>
          ) : (
            <Button onClick={handleSubmit} isDisabled={!allAnswered}>
              <div className="flex gap-2 items-center">
                <p>Lihat Hasil</p>
                <FaCheck />
              </div>
            </Button>
          )}
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default TestSection;
