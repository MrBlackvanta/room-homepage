import Signature from "@/components/layout/Signature";
import dark from "@/assets/about/dark.webp";
import light from "@/assets/about/light.webp";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="grid lg:grid-cols-[21fr_minmax(36.25rem,29fr)_22fr]"
    >
      <img
        src={dark.src}
        alt="A dimly lit lounge, with dark armchairs drawn around a round wooden coffee table."
        width={dark.width}
        height={dark.height}
        loading="lazy"
        decoding="async"
        className="aspect-[420/266] w-full object-cover lg:aspect-auto lg:h-full"
      />

      <div className="relative mx-auto w-full max-w-120 px-8 pt-12.25 pb-10.25 lg:flex lg:max-w-none lg:flex-col lg:justify-center lg:px-12 lg:py-14.75">
        <h2 className="text-eyebrow font-bold lg:text-eyebrow-lg">
          ABOUT OUR FURNITURE
        </h2>
        <p className="mt-3.75 text-body font-medium text-ink-muted lg:mt-4">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
        <Signature />
      </div>

      <img
        src={light.src}
        alt="A single white chair standing alone in a bright, empty studio."
        width={light.width}
        height={light.height}
        loading="lazy"
        decoding="async"
        className="aspect-[440/266] w-full object-cover lg:aspect-auto lg:h-full"
      />
    </section>
  );
}
