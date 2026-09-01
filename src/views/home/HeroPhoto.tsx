import type { Slide } from "@/data/slides";

type HeroPhotoProps = {
  slide: Slide;
  priority: boolean;
};

export default function HeroPhoto({ slide, priority }: HeroPhotoProps) {
  return (
    <picture className="contents">
      <source
        media="(min-width: 30rem)"
        srcSet={slide.desktop.src}
        width={slide.desktop.width}
        height={slide.desktop.height}
      />
      <img
        src={slide.mobile.src}
        alt={slide.alt}
        width={slide.mobile.width}
        height={slide.mobile.height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "low"}
        decoding={priority ? "sync" : "async"}
        className="size-full object-cover"
      />
    </picture>
  );
}
