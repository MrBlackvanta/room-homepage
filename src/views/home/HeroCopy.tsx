import { ArrowIcon } from "@/components/icons";
import type { Slide } from "@/data/slides";

type HeroCopyProps = {
  slide: Slide;
};

export default function HeroCopy({ slide }: HeroCopyProps) {
  return (
    <>
      <h1 className="text-hero font-semibold lg:text-hero-lg">
        {slide.heading}
      </h1>
      <p className="mt-3.75 text-body font-medium text-ink-muted lg:mt-4.5">
        {slide.body}
      </p>
      <a
        href="#"
        className="mt-10.25 flex w-fit items-center gap-7.5 text-cta font-medium transition-colors hover:text-ink-muted lg:mt-6.5"
      >
        <span className="me-[-0.83333em]">SHOP NOW</span>
        <ArrowIcon className="h-3 w-10 shrink-0" />
      </a>
    </>
  );
}
