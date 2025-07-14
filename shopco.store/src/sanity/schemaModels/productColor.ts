import { defineType, defineField } from "sanity";
import ColorHexAutoFill from "../components/ColorHexAutoFill"; // Custom input component

export default defineType({
  name: "productColor",
  title: "Product Color",
  type: "document",
  fields: [
    defineField({
      name: "productColor",
      title: "Product Color",
      type: "string",
    }),
    defineField({
      name: "hex",
      title: "HEX Code",
      type: "string",
      components: {
        input: ColorHexAutoFill,
      },
      validation: (Rule) =>
        Rule.regex(/^#([0-9A-Fa-f]{3}){1,2}$/, {
          name: "hex color",
          invert: false,
        }),
    }),
  ],
});
