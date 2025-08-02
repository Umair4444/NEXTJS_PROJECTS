import { useMemo, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Image from "next/image";
import { cn } from "@/lib/utils";
import MagicButton from "./MagicButton";
import ConfettiEffect from "./Confetti";

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = useMemo(() => ["HTML", "JavaScript", "TypeScript"], []);
  const rightLists = useMemo(() => ["Python", "NextJS", "React"], []);

  const [copied, setCopied] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("theumairkhan44@gmail.com");
    setCopied(true);
    setShowConfetti(true);
    setTimeout(() => {
      setCopied(false);
      setShowConfetti(false);
    }, 3000);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundImage:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* Image Section */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={title ? title.toString() : "Bento Image"}
              width={300}
              height={300}
              quality={80}
              loading="lazy" // Lazy load images
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>

        {/* Spare Image Optimization */}
        {spareImg && (
          <div
            className={`absolute right-0 -bottom-5 ${
              id === 5 ? "w-full opacity-80" : ""
            }`}
          >
            <Image
              src={spareImg}
              alt="Spare Image"
              width={300}
              height={300}
              quality={80}
              loading="lazy"
              className="object-cover object-center w-full h-full"
            />
          </div>
        )}

        {/* Text Content */}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>

          <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
            {title}
          </div>

          {/* Tech Stack List for ID 3 */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit h-fit items-center justify-center absolute -right-2 lg:-right-1">
              <div className="flex flex-col gap-3">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-2 lg:px-5 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-2 lg:px-5 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Email Copy Button for ID 6 */}
          {id === 6 && (
            <div className="mt-5 relative">
              {copied && <div className="absolute -bottom-5 right-0"></div>}
              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
              <ConfettiEffect trigger={showConfetti} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
