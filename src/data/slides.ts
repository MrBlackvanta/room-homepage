import type { StaticImageData } from "next/image";

import desktop1 from "@/assets/hero/desktop/hero-1.webp";
import desktop2 from "@/assets/hero/desktop/hero-2.webp";
import desktop3 from "@/assets/hero/desktop/hero-3.webp";
import mobile1 from "@/assets/hero/mobile/hero-1.webp";
import mobile2 from "@/assets/hero/mobile/hero-2.webp";
import mobile3 from "@/assets/hero/mobile/hero-3.webp";

export type Slide = {
  id: string;
  heading: string;
  body: string;
  alt: string;
  desktop: StaticImageData;
  mobile: StaticImageData;
};

export const slides: Slide[] = [
  {
    id: "decorate",
    heading: "Discover innovative ways to decorate",
    body: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    alt: "White moulded chairs at a pale wood dining table, with a bonsai tree at its centre.",
    desktop: desktop1,
    mobile: mobile1,
  },
  {
    id: "global",
    heading: "We are available all across the globe",
    body: "With stores all over the world, it’s easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don’t hesitate to contact us today.",
    alt: "Three stacking shell chairs in mustard, sage and blush, against a warm taupe wall.",
    desktop: desktop2,
    mobile: mobile2,
  },
  {
    id: "materials",
    heading: "Manufactured with the best materials",
    body: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    alt: "A black folding chair picked out by a single light against a dark studio backdrop.",
    desktop: desktop3,
    mobile: mobile3,
  },
];
