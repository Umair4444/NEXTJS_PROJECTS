import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, token } from "../env";

// Sanity client for server-side use (no CDN, token for write operations)
export const serverClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // use CDN in production
  token, // Only use token in server-side for production
});
