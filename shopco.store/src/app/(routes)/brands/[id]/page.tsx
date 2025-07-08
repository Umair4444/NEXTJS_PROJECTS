"use client"

import { useState, useMemo } from "react"
import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Calendar, Package, Star, Filter, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Card, CardContent } from "@/components/ui/card"
import { ProductCard } from "@/components/(products)/product-card"
import { getBrandById } from "@/lib/brands"
import { products } from "@/lib/products"

export default function BrandPage() {
  const params = useParams()
  const brand = getBrandById(params.id as string)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("name")

  if (!brand) {
    notFound()
  }

  // Filter products by brand (in a real app, you&apos;d have brand info in products)
  const brandProducts = useMemo(() => {
    // For demo purposes, we&apos;ll show some products as if they belong to this brand
    const filtered = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
      return matchesSearch && matchesCategory
    })

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered.slice(0, 8) // Show first 8 products for demo
  }, [searchQuery, selectedCategories, sortBy])

  const categories = Array.from(new Set(products.map((p) => p.category)))

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    }
  }

  const getPriceRangeColor = (priceRange: string) => {
    switch (priceRange) {
      case "Budget":
        return "bg-green-100 text-green-800"
      case "Mid-Range":
        return "bg-blue-100 text-blue-800"
      case "Premium":
        return "bg-purple-100 text-purple-800"
      case "Luxury":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
              />
              <Label htmlFor={category}>{category}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-black">
              Home
            </Link>
            <span>/</span>
            <Link href="/brands" className="hover:text-black">
              Brands
            </Link>
            <span>/</span>
            <span className="text-black font-medium">{brand.name}</span>
          </div>
        </div>
      </div>

      {/* Brand Header */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Brand Logo and Info */}
            <div className="text-center lg:text-left">
              <div className="w-48 h-32 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-8">
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  width={180}
                  height={120}
                  className="object-contain"
                />
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                <h1 className="text-4xl md:text-5xl font-bold">{brand.name}</h1>
                {brand.premium && <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white">Premium</Badge>}
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 mb-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{brand.country}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Founded {brand.founded}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  <span>{brand.productCount} Products</span>
                </div>
              </div>

              <Badge className={`${getPriceRangeColor(brand.priceRange)} mb-6`}>{brand.priceRange}</Badge>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">{brand.description}</p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {brand.specialties.map((specialty) => (
                      <Badge key={specialty} variant="secondary">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Stats */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 border-none shadow-lg">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{brand.productCount}</div>
                  <div className="text-gray-600">Products Available</div>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-none shadow-lg">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-green-600 mb-2">4.8</div>
                  <div className="text-gray-600">Average Rating</div>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-none shadow-lg">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {new Date().getFullYear() - Number.parseInt(brand.founded)}
                  </div>
                  <div className="text-gray-600">Years of Excellence</div>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-none shadow-lg">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
                  <div className="text-gray-600">Countries Served</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Brand Story</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-center leading-relaxed">
              {brand.name} has been a pioneer in the {brand.category.toLowerCase()} industry since {brand.founded}.
              Founded in {brand.country}, the brand has consistently delivered exceptional quality and innovative
              designs that have captured the hearts of fashion enthusiasts worldwide.
            </p>
            <p className="text-center leading-relaxed mt-6">
              With a focus on {brand.specialties.join(", ").toLowerCase()}, {brand.name} continues to set trends and
              redefine what it means to be stylish in today&apos;s world. Their commitment to quality and customer
              satisfaction has made them a trusted name in the fashion industry.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Desktop Filters */}
            <div className="hidden lg:block w-64 shrink-0">
              <Card className="border-none shadow-lg sticky top-4">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Filter className="w-5 h-5" />
                    <h2 className="font-semibold">Filters</h2>
                  </div>
                  <FilterContent />
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{brand.name} Products</h2>
                  <p className="text-gray-600">
                    Showing {brandProducts.length} products from {brand.name}
                  </p>
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto">
                  {/* Mobile Filter */}
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="lg:hidden bg-transparent">
                        <SlidersHorizontal className="w-4 h-4 mr-2" />
                        Filters
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                      <SheetHeader>
                        <SheetTitle>Filters</SheetTitle>
                        <SheetDescription>Filter products by category</SheetDescription>
                      </SheetHeader>
                      <div className="mt-6">
                        <FilterContent />
                      </div>
                    </SheetContent>
                  </Sheet>

                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="name">Name</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Rating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Search */}
              <div className="mb-8">
                <Input
                  placeholder={`Search ${brand.name} products...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="max-w-md"
                />
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {brandProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {brandProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedCategories([])
                    }}
                    className="mt-4"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}

              {/* Load More */}
              {brandProducts.length > 0 && (
                <div className="text-center mt-12">
                  <Button variant="outline" size="lg" className="rounded-full px-8 bg-transparent">
                    Load More Products
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Brands */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Similar Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["versace", "gucci", "prada", "calvin-klein"]
              .filter((id) => id !== brand.id)
              .slice(0, 4)
              .map((brandId) => (
                <Link
                  key={brandId}
                  href={`/brands/${brandId}`}
                  className="group bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="w-20 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
                    <span className="text-sm font-bold text-gray-600">{brandId.toUpperCase()}</span>
                  </div>
                  <h3 className="font-semibold capitalize">{brandId.replace("-", " ")}</h3>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover More from {brand.name}</h2>
          <p className="text-xl text-gray-300 mb-8">
            Explore our complete collection of {brand.name} products and find your perfect style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full px-8">
              <Link href={`/products?brand=${brand.id}`}>Shop All {brand.name}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 bg-transparent"
            >
              <Link href="/brands">Explore Other Brands</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
