"use client";

import type React from "react";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function AnimatedCard({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimatedCardProps) {
  const directions = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { y: 0, x: 20 },
    right: { y: 0, x: -20 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      animate={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
      className={cn("cursor-pointer", className)}
    >
      <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
        {children}
      </Card>
    </motion.div>
  );
}

interface AnimatedCardHeaderProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

export function AnimatedCardHeader({
  title,
  description,
  icon,
}: AnimatedCardHeaderProps) {
  return (
    <CardHeader className="space-y-2">
      {icon && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary"
        >
          {icon}
        </motion.div>
      )}
      <CardTitle className="text-xl font-bold text-card-foreground">
        {title}
      </CardTitle>
      {description && (
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      )}
    </CardHeader>
  );
}

export { CardContent as AnimatedCardContent };
