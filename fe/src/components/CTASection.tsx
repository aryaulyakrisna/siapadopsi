import React, { useState } from "react";
import { ImageWithFallback } from "./ui/ImageWithFallback";
import { IoIosArrowRoundForward } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import PrimarySectionLabel from "./ui/PrimarySectionLabel";
import Button from "./ui/Button";
import H2 from "./ui/H2";

const CTASection: React.FC<{ setShowTest: (showTest: boolean) => void }> = ({
  setShowTest
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleTestClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowTest(true);
    }, 300);
  };

  return (
    <section
      id="test"
      className="py-20 px-4 md:px-8 bg-linear-to-br from-[#FF8C42] via-[#FFB347] to-[#FFA07A] relative overflow-hidden"
    >
      <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white/50">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto">
              <ImageWithFallback
                src="/images/472488178_1660109994927351_5175194955502470313_n.webp.jpg"
                alt="Happy cat ready for adoption"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-transparent to-white/20"></div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-10 flex flex-col gap-4 justify-center">
              <PrimarySectionLabel text="✨ Langkah Terakhir" />

              <H2 text="Ingin Tahu Apakah Anda Sudah Layak Mengadopsi?" />

              <p className="text-muted-foreground mb-2 mt-2">
                Ikuti tes kelayakan adopsi kami untuk mengevaluasi kesiapan
                Anda. Tes ini dirancang untuk membantu Anda memahami apakah Anda
                sudah benar-benar siap untuk memberikan kehidupan terbaik bagi
                kucing kesayangan.
              </p>

              <div className="space-y-2 mb-2">

                <div className="flex items-center gap-2">
                  <GoDotFill />

                  <span className="text-sm">
                    Rekomendasi personal berdasarkan kondisi Anda
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <GoDotFill />

                  <span className="text-sm">
                    Tips dan panduan untuk persiapan adopsi
                  </span>
                </div>
              </div>

              <Button onClick={handleTestClick}>
                {isLoading ? (
                  <div role="status" className="flex justify-center">
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 text-(--secondary) animate-spin fill-brand"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  <p className="flex justify-center items-center gap-2 w-full">
                    <span className="text-center">Mulai Tes</span>
                    <IoIosArrowRoundForward size={20} />
                  </p>
                )}
              </Button>

              <p className="text-xs text-muted-foreground">
                ⏱️ Gratis · Tanpa perlu registrasi · Hasil langsung
              </p>
            </div>
          </div>
        </div>

        {/* <div className="mt-8 text-center text-white">
          <p>
            🐾 Setiap kucing berhak mendapatkan rumah yang penuh cinta. Mari
            pastikan Anda siap! 🐾
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default CTASection;
