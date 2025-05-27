import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

// Sanity client for client-side use (use CDN for client-side querying)
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Use CDN for faster client-side queries
});
