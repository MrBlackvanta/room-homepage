import { useEffect } from "react";

export default function usePageLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    const { body } = document;
    const main = document.querySelector("main");
    const offset = window.scrollY;

    body.style.position = "fixed";
    body.style.insetInline = "0";
    body.style.top = `${-offset}px`;
    main?.setAttribute("inert", "");

    return () => {
      body.style.position = "";
      body.style.insetInline = "";
      body.style.top = "";
      main?.removeAttribute("inert");
      window.scrollTo({ top: offset, behavior: "instant" });
    };
  }, [locked]);
}
