import type { Slide } from "@/data/slides";

type HeroPhotoProps = {
  slide: Slide;
  priority: boolean;
};

const wide = "(width >= 30rem)";
const narrow = "(width < 30rem)";

export default function HeroPhoto({ slide, priority }: HeroPhotoProps) {
  return (
    <picture className="contents">
      {priority && (
        <>
          <link
            rel="preload"
            as="image"
            href={slide.mobile.src}
            media={narrow}
            fetchPriority="high"
          />
          <link
            rel="preload"
            as="image"
            href={slide.desktop.src}
            media={wide}
            fetchPriority="high"
          />
        </>
      )}
      <source
        media={wide}
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
