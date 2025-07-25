import { defineType, defineField } from "sanity";

export default defineType({
  name: "brand",
  title: "Brand",
  type: "document",
  initialValue: {
    isFeatured: false,
    isPremium: false,
    btnText: "Visit Shop",
  },
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "btnText",
      title: "Button Text",
      type: "string",
      initialValue: "Visit Shop",
    }),
    defineField({
      name: "image",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "logo",
      title: "Brand Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "brandCategory",
      title: "Brand Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "brandCategory" }],
        },
      ],
    }),
    defineField({
      name: "isFeatured",
      title: "Is Featured?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "isPremium",
      title: "Is Premium?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "founded",
      title: "Founded Year",
      type: "string",
    }),
    defineField({
      name: "country",
      title: "Country",
      type: "string",
    }),
    defineField({
      name: "priceRange",
      title: "Price Range",
      type: "string",
      options: {
        list: ["Budget", "Mid-Range", "Premium", "Luxury"],
        layout: "radio",
      },
    }),
    defineField({
      name: "specialties",
      title: "Specialties",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "productCount",
      title: "Product Count",
      type: "number",
    }),
    defineField({
      name: "product",
      type: "reference",
      title: "Product",
      to: [{ type: "product" }],
    }),
  ],
});
