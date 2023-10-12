import { cn } from "@/lib/utils";
import { WordsT, words } from "@/lib/words-utils";

export const WordsRotation = ({ currentWord }: { currentWord: WordsT }) => {
  return (
    <div className="mx-2 -mt-2 align-middle inline-flex relative h-[80px] w-[80px]">
      {words.map((name, index) => (
        <p
          key={name}
          className={cn(
            "w-full h-full object-contain object-center absolute top-0 left-0 transition-all duration-300 ",
            currentWord === name
              ? "opacity-100 transform-none"
              : index > words.indexOf(currentWord as WordsT)
              ? "opacity-0 -translate-y-2"
              : "opacity-0 translate-y-2"
          )}
        >
          {name}
        </p>
      ))}
    </div>
  );
};
