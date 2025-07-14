// schemas/brand.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "brand",
  title: "Brand",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "name", maxLength: 96 },
    }),
    defineField({ name: "name", type: "string", title: "Brand Name" }),
    defineField({
      name: "image",
      type: "image",
      title: "Brand Image",
      options: { hotspot: true },
    }),
    defineField({ name: "btnText", type: "string", title: "Button Text" }),
    defineField({ name: "description", type: "text", title: "Description" }),
    defineField({
      name: "isPremium",
      type: "boolean",
      title: "Is Premium?",
      initialValue: false,
    }),

    defineField({
      name: "targetCustomer",
      title: "Target Customers",
      type: "array",
      of: [{ type: "reference", to: [{ type: "targetCustomer" }] }],
    }),

    defineField({
      name: "category",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "brandCategory" }] }],
    }),

    defineField({
      name: "products",
      title: "Associated Products",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    }),
  ],
});
