"use client";
import { useEffect, useMemo } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  // useAnimate returns a ref and an animate function.
  const [scope, animate] = useAnimate();

  // Memoize the words array to avoid recalculating on every render.
  const wordsArray = useMemo(() => words.split(" "), [words]);

  useEffect(() => {
    // Animate all spans to fade in with a stagger delay.
    animate("span", { opacity: 1 }, { duration: 2, delay: stagger(0.2) });
  }, [animate]);

  return (
    <div className={cn("font-bold w-full", className)}>
      <div className="my-4 w-full">
        <motion.div
          ref={scope}
          className=" text-center dark:text-white text-black leading-snug"
        >
          {wordsArray.map((word, idx) => (
            <motion.span
              key={`${word}-${idx}`}
              className={cn(
                "opacity-0 ",
                idx > 4 ? "text-[#CBACF9] " : ""
              )}
            >
              {word}{" "}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
