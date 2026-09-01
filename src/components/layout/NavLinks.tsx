import Link from "next/link";

import { navLinks } from "@/data/nav";

type NavVariant = "bar" | "menu";

const styles: Record<NavVariant, { list: string; link: string }> = {
  bar: {
    list: "flex items-center gap-8",
    link: "relative py-2 text-white after:absolute after:top-full after:left-1/2 after:h-0.5 after:w-4 after:-translate-x-1/2 after:scale-x-0 after:bg-white after:transition-transform after:content-[''] hover:after:scale-x-100 focus-visible:after:scale-x-100",
  },
  menu: {
    list: "ms-auto -me-2.5 flex items-center gap-3",
    link: "px-2.5 py-4.25 text-black",
  },
};

type NavLinksProps = {
  variant: NavVariant;
};

export default function NavLinks({ variant }: NavLinksProps) {
  const style = styles[variant];

  return (
    <ul className={style.list}>
      {navLinks.map(({ label, href }) => {
        const className = `text-nav block font-semibold ${style.link}`;
        return (
          <li key={label}>
            {href.startsWith("#") ? (
              <a href={href} className={className}>
                {label}
              </a>
            ) : (
              <Link href={href} className={className}>
                {label}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
