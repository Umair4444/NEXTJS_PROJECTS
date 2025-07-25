// upload.ts
import fs from "fs";
import { createClient } from "@sanity/client";

// place products.ndjson file in root and for first time run the command sanity dataset import products.ndjson production
// to replace existing data in sanity from product.ndjson for this run this command sanity dataset import products.ndjson production --replace
// to add only the non existing data in sanity from product.ndjson for this run this command sanity dataset import products.ndjson production --missing
// make sure the nd json data has same schema as in your sanity studio
// if schema doesnot match either fields will not add or throw error during uploading

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: process.env.SANITY_TOKEN_ID,
  token: process.env.SANITY_TOKEN_ID,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

const raw = fs.readFileSync("./../../products.ndjson", "utf-8");
const products = JSON.parse(raw);

async function uploadData() {
  for (const product of products) {
    try {
      const doc = await client.create(product);
      // console.log(`Uploaded: ${doc._id}`);
    } catch (err: any) {
      console.error("Upload error:", err.message);
    }
  }
}

uploadData();
