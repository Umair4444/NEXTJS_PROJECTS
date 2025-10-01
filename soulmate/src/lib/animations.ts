// Animation variants and utilities for the matrimonial webapp
import { Variants, Easing } from "framer-motion";

// Easing functions as constants
const EASE_OUT: Easing = [0.16, 1, 0.3, 1];
const EASE_IN_OUT: Easing = [0.42, 0, 0.58, 1];
const LINEAR: Easing = [0, 0, 1, 1];

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: EASE_OUT,
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: EASE_OUT,
    },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: EASE_OUT,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: EASE_OUT,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

export const slideInFromBottom: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: EASE_OUT,
    },
  },
};

export const floatingAnimation: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: EASE_IN_OUT,
    },
  },
} as const;

export const pulseAnimation: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: EASE_IN_OUT,
    },
  },
} as const;

export const rotateAnimation: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: LINEAR,
    },
  },
} as const;

export const hoverScale: Variants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: EASE_OUT,
    },
  },
} as const;

export const hoverLift: Variants = {
  hover: {
    y: -5,
    transition: {
      duration: 0.3,
      ease: EASE_OUT,
    },
  },
} as const;

export const buttonHover: Variants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
    transition: {
      duration: 0.3,
      ease: EASE_OUT,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
} as const;

export const cardHover: Variants = {
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.3,
      ease: EASE_OUT,
    },
  },
} as const;

export const iconHover: Variants = {
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: EASE_OUT,
    },
  },
} as const;

export const textReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: EASE_OUT,
    },
  }),
} as const;

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5, ease: EASE_IN_OUT },
} as const;
