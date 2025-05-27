import { type SchemaTypeDefinition } from "sanity";
import { hero } from "@/sanity/mySchema/Hero";
import chefs from "../mySchema/chefs";
import foods from "../mySchema/foods";
import blogs from "../mySchema/blogs";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, chefs, foods, blogs],
};
