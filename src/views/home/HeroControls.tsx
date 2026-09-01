import { AngleLeftIcon, AngleRightIcon } from "@/components/icons";

type HeroControlsProps = {
  onPrevious: () => void;
  onNext: () => void;
};

const button =
  "hover:bg-control-hover grid size-14 place-items-center bg-black text-white transition-colors focus-visible:-outline-offset-4 lg:size-20";
const chevron = "h-6 w-3.5 scale-70 lg:scale-100";

export default function HeroControls({
  onPrevious,
  onNext,
}: HeroControlsProps) {
  return (
    <div className="relative z-10 col-start-1 row-start-1 flex self-end justify-self-end lg:translate-x-full">
      <button
        type="button"
        onClick={onPrevious}
        aria-label="Previous slide"
        className={button}
      >
        <AngleLeftIcon className={chevron} />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label="Next slide"
        className={button}
      >
        <AngleRightIcon className={chevron} />
      </button>
    </div>
  );
}
