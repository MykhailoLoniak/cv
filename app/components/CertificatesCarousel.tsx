"use client";

import { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { certificates } from "@/lib/certificates";

export const CertificatesCarousel = () => {
  const [autoplay] = useState(() =>
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [autoplay],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="-ml-4 flex">
          {certificates.map((certificate) => (
            <article
              key={certificate.id}
              className="
                min-w-0 flex-[0_0_100%] pl-4
                md:flex-[0_0_50%]
                lg:flex-[0_0_33.333%]
              "
            >
              <a
                href={certificate.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-lg border border-neutral-700"
              >
                <Image
                  src={certificate.image}
                  alt={`Сертифікат ${certificate.title}`}
                  width={1200}
                  height={850}
                  className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
                />

                <div className="p-4">
                  <h3 className="font-mono text-sm text-neutral-200">
                    {certificate.title}
                  </h3>

                  <span className="mt-2 block font-mono text-xs text-neutral-500">
                    Переглянути сертифікат →
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>

      {/* Панель навігації: Кнопка ←, Точки індикації посредині, Кнопка → */}
      <div className="mt-6 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Попередній сертифікат"
          className="
            flex size-11 items-center justify-center rounded-md
            border border-neutral-700 font-mono text-xl
            transition-colors
            hover:border-orange-400 hover:text-orange-400
          "
        >
          ←
        </button>

        <div className="flex items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              type="button"
              aria-label={`Перейти до слайда ${index + 1}`}
              className={`h-2 transition-all duration-300 rounded-full ${
                index === selectedIndex
                  ? "w-8 bg-orange-400"
                  : "w-2 bg-neutral-700 hover:bg-neutral-500"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={scrollNext}
          aria-label="Наступний сертифікат"
          className="
            flex size-11 items-center justify-center rounded-md
            border border-neutral-700 font-mono text-xl
            transition-colors
            hover:border-orange-400 hover:text-orange-400
          "
        >
          →
        </button>
      </div>
    </section>
  );
};
