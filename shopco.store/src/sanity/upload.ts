// upload.js
import fs from "fs";
import sanityClient, { createClient } from "@sanity/client";

// place products.ndjson file in root and run the command sanity dataset import products.ndjson production
// make sure the nd json data has same schema as in your sanity studio 

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: process.env.SANITY_TOKEN_ID,
  token: process.env.SANITY_TOKEN_ID,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

const raw = fs.readFileSync("./../../products.ndjson", "utf-8"); // ✅ fix here
const products = JSON.parse(raw);

async function uploadData() {
  for (const product of products) {
    try {
      const doc = await client.create(product);
      console.log(`Uploaded: ${doc._id}`);
    } catch (err: any) {
      console.error("Upload error:", err.message);
    }
  }
}

uploadData();
