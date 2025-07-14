import { type SchemaTypeDefinition } from "sanity";
import product from "../schemaModels/product";
import brand from "../schemaModels/brand";
import hero from "../schemaModels/heroSection";
import genderCategory from "../schemaModels/genderCategory";
import typeCategory from "../schemaModels/typeCategory";
import faq from "../schemaModels/faq";
import { brandCategory } from "../schemaModels/brandCategory";
import review from "../schemaModels/review";
import { targetCustomer } from "../schemaModels/targetCustomer";
import productColor from "../schemaModels/productColor";
import productSize from "../schemaModels/productSize";

export const schema: { types: SchemaTypeDefinition[] } = {
  // types: [],
  types: [
    hero,
    product,
    brand,
    genderCategory,
    typeCategory,
    faq,
    brandCategory,
    review,
    targetCustomer,
    productColor,
    productSize,
  ],
};
