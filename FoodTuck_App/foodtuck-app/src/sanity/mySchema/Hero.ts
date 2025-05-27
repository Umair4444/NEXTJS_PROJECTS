export const hero = {
  name: "hero",
  type: "document",
  title: "Hero Section",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading Title",
    },
    {
      name: "preheading",
      type: "text",
      title: "Preheading Paragraph",
      description: "A short paragraph for the hero section.",
    },
    {
      name: "content",
      type: "string",
      title: "Content Blocks",
      description: "Rich text for the hero section.",
    },
    // {
    //   name: "content",
    //   type: "array",
    //   of: [{ type: "block" }],
    //   title: "Content Blocks",
    //   description: "Rich text for the hero section.",
    // },
    {
      name: "poster",
      type: "image",
      title: "Poster Image",
      options: {
        hotspot: true, // Enables image cropping
      },
    },
  ],
};
