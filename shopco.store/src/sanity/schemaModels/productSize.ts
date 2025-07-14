import { defineType, defineField } from "sanity";

export default defineType({
  name: "productSize",
  title: "Product Size",
  type: "document",
  fields: [
    defineField({
      name: "productSize",
      title: "Product Size",
      type: "string",
      options: {
        list: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
