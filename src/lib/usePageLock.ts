import { useEffect } from "react";

export default function usePageLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    const root = document.documentElement;
    const main = document.querySelector("main");
    const gutter = window.innerWidth - root.clientWidth;

    root.style.overflow = "hidden";
    root.style.paddingRight = `${gutter}px`;
    main?.setAttribute("inert", "");

    return () => {
      root.style.overflow = "";
      root.style.paddingRight = "";
      main?.removeAttribute("inert");
    };
  }, [locked]);
}
