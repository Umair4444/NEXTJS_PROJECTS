// app/blog/page.tsx
import { getBlogs } from "@/utils/contentful";
import BlogCard from "@/components/BlogCard";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import blankImage from "@/Assets/default.png";

export default async function BlogList() {
  const data = await getBlogs();

  const findImageUrl = (id: string) => {
    const asset = data.includes.Asset.find((img: any) => img.sys.id === id);
    return asset ? `https:${asset.fields.file.url}` : blankImage;
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-10 text-center text-primary">
        Latest Blog Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.items.map((item: any) => (
          <BlogCard
            key={item.sys.id}
            title={item.fields.blogTitle}
            slug={item.fields.blogSlug}
            excerpt={documentToReactComponents(item.fields.blogContent)}
            imageUrl={findImageUrl(item.fields.posterImage?.[0]?.sys?.id)}
          />
        ))}
      </div>
    </main>
  );
}
