import { SiteHeader } from "@/components/layout";
import { slides } from "@/data";
import { AboutSection, HeroCarousel, HeroCopy, HeroPhoto } from "@/views/home";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <HeroCarousel
          slides={slides.map((slide, index) => ({
            id: slide.id,
            photo: <HeroPhoto slide={slide} priority={index === 0} />,
            copy: <HeroCopy slide={slide} />,
          }))}
        />
        <AboutSection />
      </main>
    </>
  );
}
