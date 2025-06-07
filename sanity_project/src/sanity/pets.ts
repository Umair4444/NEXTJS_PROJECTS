import { title } from "process";

export default {
  name: "pet",
  type: "document",
  title: "Pet",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      Options: {
        hotspot: true,
      },
    },
  ],
};
