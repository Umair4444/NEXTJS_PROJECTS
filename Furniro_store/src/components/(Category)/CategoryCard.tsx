import { Eye } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { CategoryProps } from "@/lib/mockCategoriesData";

interface CategoryCardProps {
  CategoryData: CategoryProps[];
}

const CategoryCard: React.FC<CategoryCardProps> = ({ CategoryData }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-secondary/20 to-secondary/5">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collections of furniture, lighting, decor, and
            textiles
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CategoryData.map((category) => (
            <Link
              key={category.title}
              href={`/category/${category.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <Card className="overflow-hidden border-0">
                <CardContent className="p-0 relative">
                  {/* Image */}
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Title & Product Count */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-xl">{category.title}</h3>
                    <h3 className="text-sm opacity-90">
                      {category.totalProducts}+ Products
                    </h3>
                  </div>

                  {/* Hover Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <Eye className="h-5 w-5 text-white" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCard;
