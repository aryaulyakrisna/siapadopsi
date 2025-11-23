import React from "react";
import PrimarySectionLabel from "./ui/PrimarySectionLabel";
import { IoIosArrowRoundDown } from "react-icons/io";
import H1 from "./ui/H1";
import Button from "./ui/Button";
import Button2 from "./ui/Button2";
import { ImageWithFallback } from "./ui/ImageWithFallback";

const HeroSection: React.FC = () => {
  const goToNextSection = () => {
    document.getElementById("kesiapan_lingkungan")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const goToTestSection = () => {
    document.getElementById("test")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-linear-to-br from-[#FFF8F0] via-[#FFE5D9] to-[#FFD4B8] py-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 flex flex-col text-center items-center md:text-left md:items-start">
            <PrimarySectionLabel
              type="bordered"
              text="🐱 Panduan Adopsi Kucing"
            />
            <H1 text="Siapkah Anda Mengadopsi Kucing?" />
            <p className="max-sm:text-sm lg:max-md:text-lg text-muted-foreground max-w-xl">
              Mengadopsi kucing adalah komitmen jangka panjang yang membutuhkan
              persiapan matang. Mari pastikan Anda benar-benar siap untuk
              memberikan kehidupan terbaik bagi si kucing kesayangan.
            </p>
            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              <Button onClick={goToNextSection}>
                <p className="flex items-center gap-2">
                  <span>Pelajari Lebih Lanjut</span>
                  <IoIosArrowRoundDown size={20} />
                </p>
              </Button>
              <Button2 onClick={goToTestSection}>
                <div className="flex items-center gap-2">
                  <span>Tes Kesiapan Adopsi</span>
                  <IoIosArrowRoundDown size={20} />
                </div>
              </Button2>
            </div>
          </div>

          <div className="relative z-9">
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <ImageWithFallback
                src="/images/472795948_1302675934101643_8469443639278722029_n.webp.jpg"
                alt="Cute cat"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>

            <div className="absolute -top-4 -left-4 w-24 h-24 bg-(--primary) rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-(--cream) rounded-full opacity-20 animate-pulse delay-75"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full"
        >
          <path
            fill="#FFF8F0"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
