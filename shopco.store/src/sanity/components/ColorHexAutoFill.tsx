import React, { useEffect } from "react";
import { useFormValue } from "sanity";
import { TextInput } from "@sanity/ui";
import { set, unset } from "sanity";

const colorMap: Record<string, string> = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",
  black: "#000000",
  white: "#FFFFFF",
  yellow: "#FFFF00",
  orange: "#FFA500",
  pink: "#FFC0CB",
  purple: "#800080",
  gray: "#808080",
  brown: "#A52A2A",
  // Add more as needed
};

export default function ColorHexAutoFill({ value, onChange }: any) {
  const productColor = useFormValue(["productColor"]) as string;

  useEffect(() => {
    if (productColor && colorMap[productColor.toLowerCase()]) {
      const autoHex = colorMap[productColor.toLowerCase()];
      if (autoHex !== value) {
        onChange(set(autoHex));
      }
    } else if (!productColor && value) {
      onChange(unset());
    }
  }, [productColor]);

  return (
    <TextInput
      value={value}
      onChange={(e) => onChange(set(e.currentTarget.value))}
      placeholder="e.g. #FF0000"
    />
  );
}
