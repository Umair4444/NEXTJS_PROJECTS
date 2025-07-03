// utils/contentful.ts
export async function getBlogs() {
  // const url = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=vibrantBlog`;
  // const url = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.ENVIRONMENT_ID}/content_types=vibrantBlog?access_token=${process.env.CONTENTFUL_ACCESS_KEY}`; // wrong
  const url = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.ENVIRONMENT_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=vibrantBlog`;

  console.log("/n", url);
  console.log("/n", url);
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch Contentful blogs");

  return res.json();
}
