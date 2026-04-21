import React from "react";
import PrimarySectionLabel from "./ui/PrimarySectionLabel";
import H2 from "./ui/H2";
import ArtikelCarousel, { type Article } from "./ui/ArtikelCarousel";
import type { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: false };
const articles: Article[] = [
  {
    imgSrc: "/images/472795948_1302675934101643_8469443639278722029_n.webp.jpg",
    title: "asdasd ada ",
    author: "asdasd ada ",
    date: "asdasd aasd",
  },
  {
    imgSrc: "/images/472795948_1302675934101643_8469443639278722029_n.webp.jpg",
    title:
      "asdasd ada a a sdasd asdas dasd asddad asd asdasdasdasd as dasd fgffvsdfdaf",
    author: "asdasd ada ",
    date: "asdasd aasd",
  },
];

const ArtikelCarouselSection: React.FC = () => {
  return (
    <section id="alasan" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 flex flex-col gap-4 items-center">
          <PrimarySectionLabel text="💡Bacaan Tambahan" />
          <H2 text="Artikel Pilihan Seputar Kucing" />
          <p className="text-muted-foreground max-w-2xl ">
            Perluas wawasan Anda dengan artikel pilihan berdasarkan pengalaman
            pribadi dalam merawat kucing
          </p>
        </div>

        <ArtikelCarousel options={OPTIONS} articles={articles} />
      </div>
    </section>
  );
};

export default ArtikelCarouselSection;
