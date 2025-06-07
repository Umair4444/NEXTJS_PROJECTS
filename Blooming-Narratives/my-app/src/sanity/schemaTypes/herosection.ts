import { defineType, defineField } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Hero Title",
      type: "string",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "subtitle",
      title: "Hero Subtitle",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ctaLink",
      title: "CTA Button Link",
      type: "url",
      validation: (Rule) => Rule.required().uri({ allowRelative: true }),
    }),
    defineField({
      name: "image",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "imageAlt",
      title: "Image Alt Text",
      type: "string",
      description: "Accessibility description for the image",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
