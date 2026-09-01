import type { SVGProps } from "react";

export default function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 20 14"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" />
    </svg>
  );
}
