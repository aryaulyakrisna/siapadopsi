import React from "react";
import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import LabelLink from "./LabelLink";
import Autoplay from "embla-carousel-autoplay";
import ArticleCard from "./ArticleCard";

export interface Article {
  imgSrc: string;
  title: string;
  author: string;
  date: string;
}

interface ArtikelCarouselProp {
  articles: Article[];
  options?: EmblaOptionsType;
}

const ArtikelCarousel: React.FC<ArtikelCarouselProp> = ({
  articles,
  options,
}) => {
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 1000 }),
  ]);

  return (
    <>
      <div className="w-full mx-auto max-w-4xl">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y ease-in cursor-pointer gap-4">
            {articles.map((article, index) => (
              <ArticleCard
                key={index}
                imgSrc={article.imgSrc}
                title={article.title}
                author={article.author}
                date={article.date}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center w-full mt-8">
          <LabelLink>Lihat artikel lainnya..</LabelLink>
        </div>
      </div>
    </>
  );
};

export default ArtikelCarousel;
