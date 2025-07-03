// components/BlogCard.tsx
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

export default function BlogCard({
  title,
  slug,
  excerpt,
  imageUrl,
}: {
  title: string;
  slug: string;
  excerpt: React.ReactNode;
  imageUrl: StaticImageData | string;
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition-shadow duration-300 flex flex-col h-full border border-gray-200">
      <Link href={`/blog/${slug}`} className="flex flex-col h-full">
        <Image
          src={imageUrl}
          width={500}
          height={300}
          alt={title}
          className="w-full h-52 object-cover"
        />
        <div className="p-5 flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
            <div className="text-gray-600 text-sm line-clamp-3">{excerpt}</div>
          </div>
          <span className="text-accent font-semibold mt-4">Read More →</span>
        </div>
      </Link>
    </div>
  );
}
