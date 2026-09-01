"use client";

import { useState } from "react";
import type { KeyboardEvent, ReactNode } from "react";

import HeroControls from "./HeroControls";

type RenderedSlide = {
  id: string;
  photo: ReactNode;
  copy: ReactNode;
};

type HeroCarouselProps = {
  slides: RenderedSlide[];
};

const fade =
  "transition-[opacity,scale,translate] duration-500 ease-out motion-reduce:translate-none motion-reduce:scale-100";

export default function HeroCarousel({ slides }: HeroCarouselProps) {
  const [active, setActive] = useState(0);
  const [goingBack, setGoingBack] = useState(false);

  const go = (step: number) => {
    setGoingBack(step < 0);
    setActive((current) => (current + step + slides.length) % slides.length);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") go(-1);
    if (event.key === "ArrowRight") go(1);
  };

  const resting = goingBack ? "-translate-y-3" : "translate-y-3";

  return (
    <section
      aria-label="Featured collections"
      onKeyDown={handleKeyDown}
      className="grid lg:grid-cols-[minmax(0,7fr)_minmax(32rem,5fr)]"
    >
      <div className="col-start-1 row-start-1 grid v-hero-frame overflow-clip">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            inert={index !== active}
            aria-hidden={index !== active}
            className={`${fade} col-start-1 row-start-1 ${
              index === active
                ? "scale-100 opacity-100"
                : "pointer-events-none scale-104 opacity-0"
            }`}
          >
            {slide.photo}
          </div>
        ))}
        <div className="pointer-events-none relative z-10 col-start-1 row-start-1 h-38 self-start bg-linear-to-b/srgb from-black/40 from-55% to-transparent lg:h-44" />
      </div>

      <HeroControls onPrevious={() => go(-1)} onNext={() => go(1)} />

      <div
        className="relative row-start-2 grid lg:col-start-2 lg:row-start-1"
        aria-live="polite"
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            inert={index !== active}
            aria-hidden={index !== active}
            className={`${fade} mx-auto w-full max-w-120 px-8 pt-15 pb-18 lg:flex lg:max-w-none lg:flex-col lg:justify-center lg:px-[16.667%] lg:pt-16 lg:pb-25 ${
              index === active
                ? "col-start-1 row-start-1 translate-y-0 opacity-100"
                : `pointer-events-none absolute inset-0 ${resting} opacity-0`
            }`}
          >
            {slide.copy}
          </div>
        ))}
      </div>
    </section>
  );
}
