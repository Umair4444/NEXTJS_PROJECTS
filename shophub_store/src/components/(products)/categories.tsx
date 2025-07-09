import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const categories = [
  {
    name: "Electronics",
    image: "/placeholder.svg?height=200&width=300",
    count: "1,234 items",
  },
  {
    name: "Fashion",
    image: "/placeholder.svg?height=200&width=300",
    count: "2,567 items",
  },
  {
    name: "Home & Garden",
    image: "/placeholder.svg?height=200&width=300",
    count: "890 items",
  },
  {
    name: "Sports",
    image: "/placeholder.svg?height=200&width=300",
    count: "456 items",
  },
];

export function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of categories and find exactly what
            you&apos;re looking for
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/category/${category.name.toLowerCase()}`}
            >
              <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-gray-200 rounded-t-lg overflow-hidden">
                    <Image
                      width={500}
                      height={500}
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{category.count}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
