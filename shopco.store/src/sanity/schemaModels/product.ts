// schemas/product.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "name", maxLength: 96 },
    }),
    defineField({ name: "name", type: "string", title: "Product Name" }),
    defineField({ name: "price", type: "number", title: "Current Price" }),
    defineField({
      name: "originalPrice",
      type: "number",
      title: "Original Price (Optional)",
    }),
    defineField({
      name: "discount",
      type: "number",
      title: "Discount (%) (Optional)",
    }),

    defineField({
      name: "image",
      type: "image",
      title: "Main Image",
      options: { hotspot: true },
    }),
    defineField({
      name: "images",
      type: "array",
      title: "Gallery Images",
      of: [{ type: "image" }],
    }),

    defineField({ name: "btnText", type: "string", title: "Button Text" }),
    defineField({
      name: "description",
      type: "string",
      title: "Short Description",
    }),
    defineField({
      name: "productDescription",
      type: "text",
      title: "Full Product Description",
    }),

    defineField({
      name: "sizes",
      type: "array",
      title: "Available Sizes",
      of: [{ type: "reference", to: [{ type: "productSize" }] }],
    }),
    defineField({
      name: "colors",
      type: "array",
      title: "Available Colors",
      of: [{ type: "reference", to: [{ type: "productColor" }] }],
    }),

    defineField({
      name: "isNew",
      type: "boolean",
      title: "Is New?",
      initialValue: false,
    }),
    defineField({
      name: "isOnSale",
      type: "boolean",
      title: "Is On Sale?",
      initialValue: false,
    }),

    defineField({
      name: "genderCategories",
      title: "Gender Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "genderCategory" }] }],
    }),
    defineField({
      name: "typeCategories",
      title: "Type Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "typeCategory" }] }],
    }),

    defineField({
      name: "brand",
      type: "reference",
      title: "Brand",
      to: [{ type: "brand" }],
    }),

    defineField({
      name: "faq",
      title: "FAQ",
      type: "array", // or "reference" if it's only one FAQ
      of: [{ type: "reference", to: [{ type: "faq" }] }],
    }),

    defineField({
      name: "rating",
      type: "number",
      title: "Rating",
    }),
  ],

  // You can only use initialValue at the document level, not inside defineField.
  initialValue: {
    btnText: "Shop Now", // ✅ default value here
  },
});
