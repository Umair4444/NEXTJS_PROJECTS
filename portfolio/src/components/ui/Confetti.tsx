"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const ConfettiEffect = ({ trigger }: { trigger: boolean }) => {
  const { width, height } = useWindowSize();
  const [isRunning, setIsRunning] = useState(trigger);

  useEffect(() => {
    if (trigger) {
      setIsRunning(true);
      setTimeout(() => setIsRunning(false), 3000); // Stop after 3 seconds
    }
  }, [trigger]);

  return isRunning ? <Confetti width={width} height={height} /> : null;
};

export default ConfettiEffect;
