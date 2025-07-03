// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import { getBlogs } from "@/utils/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import blankImage from "@/Assets/default.png";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getBlogs();

  // ✅ Step 1: Find the matching blog post by slug
  const post = data.items.find((p: any) => p.fields.blogSlug === params.slug);
  if (!post) return notFound();

  // ✅ Step 2: Safely extract posterImage ID
  const posterImageId = post.fields.posterImage?.[0]?.sys?.id;

  // ✅ Step 3: Find the asset by ID (if exists)
  const asset = data.includes.Asset.find(
    (img: any) => img.sys.id === posterImageId
  );
  const imageUrl = asset?.fields?.file?.url
    ? `https:${asset.fields.file.url}`
    : blankImage;
  console.log(imageUrl);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-6">
        {post.fields.blogTitle}
      </h1>

      <div className="mb-8">
        <Image
          src={imageUrl}
          width={800}
          height={400}
          alt={post.fields.blogTitle}
          className="rounded-lg object-cover w-full max-h-[400px]"
        />
      </div>

      <article className="prose prose-lg text-gray-800 max-w-none">
        {documentToReactComponents(post.fields.blogContent)}
      </article>
    </div>
  );
}
