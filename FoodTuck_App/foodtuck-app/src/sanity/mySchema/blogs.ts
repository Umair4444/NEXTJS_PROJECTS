const blogs = {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "content",
      title: "Content",
      type: "text",
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
    },
    {
      name: "author",
      title: "Author",
      type: "string",
    },
    {
      name: "image",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["Programming", "Writing", "Health", "Travel", "Lifestyle"],
      },
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
    },
    {
      name: "updatedAt",
      title: "Updated At",
      type: "datetime",
    },
    {
      name: "isPublished",
      title: "Published",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "comments",
      title: "Comments",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "user",
              title: "User",
              type: "string",
            },
            {
              name: "message",
              title: "Message",
              type: "text",
            },
            {
              name: "createdAt",
              title: "Created At",
              type: "datetime",
            },
          ],
        },
      ],
    },
  ],
};

export default blogs