"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { CloseIcon, Logo, MenuIcon } from "@/components/icons";
import usePageLock from "@/lib/usePageLock";

import NavLinks from "./NavLinks";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  usePageLock(open);

  useEffect(() => {
    if (!open) return;

    const wide = window.matchMedia("(min-width: 64rem)");
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const closeWhenWide = () => {
      if (wide.matches) setOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    wide.addEventListener("change", closeWhenWide);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      wide.removeEventListener("change", closeWhenWide);
    };
  }, [open]);

  return (
    <header
      className={`inset-x-0 top-0 flex h-27.5 items-center gap-14 px-6 lg:h-35.25 lg:px-16 ${
        open ? "fixed z-60" : "absolute z-30"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className={`-ms-3.5 grid size-12 place-items-center transition-colors duration-300 lg:hidden ${
          open ? "text-ink-muted" : "text-white"
        }`}
      >
        {open ? (
          <CloseIcon className="size-4" />
        ) : (
          <MenuIcon className="h-3.5 w-5" />
        )}
      </button>

      <Link
        href="/"
        aria-label="room, home"
        className={`absolute left-1/2 -translate-x-1/2 text-white lg:static lg:translate-none ${
          open ? "invisible" : ""
        }`}
      >
        <Logo className="h-3.5 w-15.5" />
      </Link>

      <nav aria-label="Main" className="hidden lg:block">
        <NavLinks variant="bar" />
      </nav>

      <div
        inert={!open}
        className={`fixed inset-0 -z-1 lg:hidden ${open ? "" : "pointer-events-none"}`}
      >
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ease-out ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <nav
          aria-label="Main"
          className={`relative flex h-27.5 items-center bg-white px-6 transition-transform duration-300 ease-out motion-reduce:transition-none ${
            open ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <NavLinks variant="menu" />
        </nav>
      </div>
    </header>
  );
}
