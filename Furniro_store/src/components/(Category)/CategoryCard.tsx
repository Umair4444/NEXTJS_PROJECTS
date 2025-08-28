import { Eye } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";

const CategoryCard = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-foreground mb-4">
          Shop by Category
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore our curated collections of furniture, lighting, decor, and
          textiles
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from(
          new Map(CategoryData.map((item) => [item.category, item])).values()
        ).map((category) => (
          <Link
            key={category.category}
            href={`/category/${category.category
              .toLowerCase()
              .replace(" ", "-")}`}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            <Card className="overflow-hidden border-0">
              <CardContent className="p-0 relative">
                <img
                  src={category.image}
                  alt={category.category}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-xl">{category.category}</h3>
                  <p className="text-sm opacity-90">{category.description}</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <Eye className="h-5 w-5 text-white" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
